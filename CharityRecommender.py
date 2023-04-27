# https://dev.to/dev180memes/deploying-recommender-systems-algorithm-to-a-web-app-1gbo
# https://github.com/sagarmk/Cosine-similarity-from-scratch-on-webpages

import pandas as pd
from bs4 import BeautifulSoup
import urllib
import urllib.request
from urllib.request import Request, urlopen
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.metrics.pairwise import cosine_similarity
import time

# import charities from csv as DataFrame

# dataFrame = pd.read_csv('./names_urls3.csv')
dataFrame2 = pd.read_csv('./dataFrameWithDocuments.csv')

# # use charity URL to access webpage and turn the HTML into a document of terms


# def getContentFromURL(url):
#     # Create a suitable web scraping HTTP request
#     req = Request(
#         url=url,
#         # Uses mozilla user agent to pose as a browser so request is not blocked
#         headers={'User-Agent': 'Mozilla/5.0/'}
#     )
#     try:
#         pageAsHTML = urllib.request.urlopen(req).read()
#     # If the hostname cannot be resolved
#     except urllib.error.URLError as err:
#         print("Cannot resolve hostname for:", url, err.reason)
#         return ''
#     except UnicodeError:
#         print("Unicode error while decoding URL:", url)
#         return ''
#     except:
#         print("Another error has occured")
#         return ''
#     soup = BeautifulSoup(pageAsHTML, "lxml")
#     for script in soup(["script", "style"]):
#         script.extract()
#     text = soup.get_text()
#     return text

# # take the charity dataframe and return a list containing charity id, name and term document


# def returnCharityListWithDocuments(df):
#     # create an empty list
#     newCharityDataStructure = []
#     # for each row in the input dataframe
#     for i in df.index:
#         # save charity id
#         charityId = df['Charity ID'][i]
#         # save charity name
#         charityName = df['Name'][i]
#         # if url field is not null!
#         # get and save page as document
#         # if df['Website'][i] != None: # Code to same effect not using pandas library isnull, not sure which is best
#         if pd.isnull(df.loc[i, 'Website']):
#             charityTermDocument = ''
#         else:
#             charityTermDocument = getContentFromURL(df['Website'][i])
#         # create list containing the id, name and document
#         newCharityEntry = [charityId, charityName, charityTermDocument]
#         # add the entry to the first list
#         newCharityDataStructure.append(newCharityEntry)
#     # return new charity data structure
#     return newCharityDataStructure


# charityTermArray = returnCharityListWithDocuments(dataFrame)

# # turn 2d array of charity ids, names and term documents into a new DataFrame

# dataFrame2 = pd.DataFrame(charityTermArray, columns=['id', 'name', 'document'])

# # save the DataFrame as a csv file

# csvOfNewDataFrame = dataFrame2.to_csv('dataFrameWithDocuments.csv')

# turn document into a matrix of something called token counts

countVector = CountVectorizer(stop_words='english')

# transform matrix into a document-term matrix

count_matrix = countVector.fit_transform(dataFrame2['document'].values.astype('U'))

# Following tutorial code
cosSim2 = cosine_similarity(count_matrix, count_matrix)

dataFrame2 = dataFrame2.reset_index()

indices = pd.Series(dataFrame2.index, index=dataFrame2['name'])

all_names = [dataFrame2['name'][i] for i in range(len(dataFrame2['name']))]


def get_recommendations(name):
    start = time.time()
    cosSim = cosine_similarity(count_matrix, count_matrix)
    idx = indices[name]
    sim_scores = list(enumerate(cosSim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1: 11]
    charity_indices = [i[0] for i in sim_scores]
    displayName = dataFrame2['name'].iloc[charity_indices]
    return_dataFrame = pd.DataFrame(columns=['name'])
    return_dataFrame['name'] = displayName
    end = time.time()
    print(end-start)
    return return_dataFrame


print(get_recommendations('PROCEEDS OF SALE OF THE FORMER FREE LIBRARY'))
