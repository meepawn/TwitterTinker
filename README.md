# TwitterTinker
Your NodeJS personal Twitter client oldschool CLI style

[Twitter](https://twitter.com/TaufiqByon)

## Getting started for babies
First of all, you need credentials for Twitter API, such as:

> CONSUMER_KEY

> CONSUMER_SECRET

> ACCESS_TOKEN_KEY

> ACCESS_TOKEN_SECRET

Get yours at: https://apps.twitter.com/

## Requirements
- You need the almighty NodeJS. Recommended version is v.4.4.0 LTS (Windows), get yours at: https://nodejs.org/en/download/

## Installation
- Download the ZIP file which contains config.js, tweet.js, etc.
- Extract where you'd like.
- Done, to run it look below.

## Usage

- To configure it, you have to place Twitter API credentials, run this command inside the extracted folder: (or simply change the confs/config.json)
> `node config`

- To tweet, run:
> `node tweet`

- To tweet with (REST API: lat, long, display_coordinates), run:
> `node tweetWithLocation`

- To get data from someone's time line, run: (You will be asked screen_name, count)
> `node tweetMine`

 //for example @TaufiqByon, screen name is TaufiqByon without the "@". Also case sensitive.

- For complete Tweeting, okay before that. As we know in REST API, the POST statuses/update which is also know as "Tweeting". We can definitely inject other values alongside the tweet (status) data, those values are:
> `node tweetComplete`

  - `status` - Required, the tweet data
  - `in_reply_to_status_id` - If the tweet is meant as a reply
  - `possibly_sensitive` - Boolean for defining if the tweet is sensitive to others
  - `lat` - Latitude information
  - `long` - Longitude information
  - `place_id` - Automatically there if you put recognizeable latitude and Longitude
  - `display_coordinates` - Boolean, show location or not?
  - `trim_user` - Show user's object in a tweet
  - `media_ids` - Media ID, care more about the file uploading


- Other functions are being developed.

## Example
There is a folder called "logs" contains data_1.json and response_1.json. Results from tweetMine.js gained 10 tweets on my timeline. All in JSON form. For the next mining the name of the file will be incremented like data_2, data_3, and goes up to make sure no data is overwritten.


![alt tag](http://piq.codeus.net/static/media/userpics/piq_194239_400x400.png)
