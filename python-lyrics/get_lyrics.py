from bs4 import BeautifulSoup
import urllib2
import cookielib
import requests
import json

def get_lyrics(url):

    lyrics_list = []

    lyrics_web = urllib2.urlopen(url)
    lyrics_code = lyrics_web.read()
    soup = BeautifulSoup(lyrics_code, 'html.parser')
    lyrics_array = soup.find_all("div", class_="")

    for lyrics in lyrics_array:
        lyrics_text = lyrics.get_text().strip()
        if lyrics_text:
            lyrics_list.append(lyrics_text)

    return ''.join(lyrics_list)

if __name__ == "__main__":
    url = "http://www.azlyrics.com/lyrics/faithnomore/easy.html"
    print get_lyrics(url)
