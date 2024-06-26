import pandas as pd
from bs4 import BeautifulSoup
import urllib
import urllib.request
from urllib.request import Request

# use charity URL to access its webpage and turn the HTML into a document of terms, handling errors
# As it can be seen by the number of web issues, the data source is less than optimal

def getContentFromURL(url):
    # Create a suitable web scraping HTTP request
    req = Request(
        url=url,
        # Uses mozilla user agent to pose as a browser so request is not blocked
        headers={'User-Agent': 'Mozilla/5.0/'}
    )
    try:
        pageAsHTML = urllib.request.urlopen(req).read()
    # If the hostname cannot be resolved
    except urllib.error.URLError as err:
        print("Cannot resolve hostname for:", url, err.reason)
        return ''
    except UnicodeError:
        print("Unicode error while decoding URL:", url)
        return ''
    except:
        print("Another error has occured")
        return ''
    soup = BeautifulSoup(pageAsHTML, "lxml")
    for script in soup(["script", "style"]):
        script.extract()
    text = soup.get_text()
    return text

# take the charity dataframe and return a list containing charity id, name and term document


def returnCharityListWithDocuments(df):
    # create an empty list
    newCharityDataStructure = []
    # for each row in the input dataframe
    for i in df.index:
        # save charity id
        charityId = df['Charity ID'][i]
        # save charity name
        charityName = df['Name'][i]
        # if url field is not null, get and save page as document
        if pd.isnull(df.loc[i, 'Website']):
            charityTermDocument = '' # Unfortunately, many website sections of CharityBase's data are empty
        else:
            charityTermDocument = getContentFromURL(df['Website'][i])
        # create list containing the id, name and document
        newCharityEntry = [charityId, charityName, charityTermDocument]
        # add the entry to the first list
        newCharityDataStructure.append(newCharityEntry)
    # return new charity data structure
    return newCharityDataStructure


# save data from a charity list to a new dataframe

def saveCharityContent(charityData):
    charityTermArray = returnCharityListWithDocuments(charityData)
    # turn 2d array of charity ids, names and term documents into a new DataFrame
    dataFrame2 = pd.DataFrame(charityTermArray, columns=[
                              'id', 'name', 'document'])
    # save the DataFrame as a csv file
    dataFrame2.to_csv('dataFrameWithDocuments.csv')


charities = pd.read_csv('CharityBaseData.csv')

saveCharityContent(charities)
