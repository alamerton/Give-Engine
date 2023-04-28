# https://dev.to/dev180memes/deploying-recommender-systems-algorithm-to-a-web-app-1gbo
# https://github.com/sagarmk/Cosine-similarity-from-scratch-on-webpages

import json
import pandas as pd
from bs4 import BeautifulSoup
import urllib
import urllib.request
from urllib.request import Request, urlopen
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.metrics.pairwise import cosine_similarity
import time
import flask
from flask import Response, request
from flask_cors import CORS


# flask --app Recommender run
app = flask.Flask(__name__)
CORS(app)

# open charity information dataframe
dataFrame2 = pd.read_csv('./dataFrameWithDocuments.csv')

countVector = CountVectorizer(stop_words='english')

# transform matrix into a document-term matrix
count_matrix = countVector.fit_transform(
    dataFrame2['document'].values.astype('U'))

# dataFrame2 = dataFrame2.reset_index()

# print("data frame 2", dataFrame2)

indices = pd.Series(dataFrame2.index, index=dataFrame2['name'])

all_names = [dataFrame2['name'][i] for i in range(len(dataFrame2['name']))]


def get_recommendations(name):
    # start = time.time()
    cosSim = cosine_similarity(count_matrix, count_matrix)
    idx = indices[name]
    # returns a list of charity indexes, with their similarity score to the input charity
    sim_scores = list(enumerate(cosSim[idx]))
    # returns sorted version of the list, starting with the most similar charity
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    # reduces the list into just 10 charities
    sim_scores = sim_scores[1: 11]
    # saves the ids of the most similar charities into a new list
    charity_indices = [i[0] for i in sim_scores]
    # creates a dataframe containing the ids and names of the charities
    # displayName = dataFrame2['name'].iloc[charity_indices]
    # # creates a new dataframe with a 'name' column
    # return_dataFrame = pd.DataFrame(columns=['charities'])
    # print("return dataframe", return_dataFrame)
    # return_dataFrame['name'] = displayName
    # end = time.time()
    # print(end-start)
    # return return_dataFrame
    return charity_indices


@app.route("/", methods=['POST'])
def apiResponse():
    charityName = request.get_json()['charityName']
    recommendedCharities = get_recommendations(charityName)
    print("recommended charities", recommendedCharities)
    # responseObject = recommendedCharities.to_json()
    # responseObject = {
    #     "charities": recommendedCharities
    # }
    responseObject = json.dumps(recommendedCharities)
    print(responseObject)
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return Response(responseObject, status=200, mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=False, port=8001)

# Run me on the file, not the terminal
