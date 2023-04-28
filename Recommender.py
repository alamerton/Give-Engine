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

# indices = pd.Series(dataFrame2.index, index=dataFrame2['name'])
indices = pd.Series(dataFrame2.index, index=dataFrame2['name'])

# all_names = [dataFrame2['name'][i] for i in range(len(dataFrame2['name']))]
all_names = [dataFrame2['name'][i] for i in range(len(dataFrame2['name']))]


def get_recommendations(name):
    cosSim = cosine_similarity(count_matrix, count_matrix)
    idx = indices[name]
    sim_scores = list(enumerate(cosSim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1: 11]
    charity_indices = [i[0] for i in sim_scores]
    getId = dataFrame2['id'].iloc[charity_indices]
    return_dataFrame = pd.DataFrame(columns=['id'])
    return_dataFrame['id'] = getId
    top10IDs = return_dataFrame['id'].values.tolist()
    return top10IDs


@app.route("/", methods=['POST'])
def apiResponse():
    charityName = request.get_json()['charityName']
    recommendedCharities = get_recommendations(charityName)
    responseObject = json.dumps(recommendedCharities)
    return Response(responseObject, status=200, mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=False, port=8001)

# Run me on the file, not the terminal
