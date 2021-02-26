# Project Jukebox V.1.6
Project Jukebox is a minecraft inspired discord bot that plays the minecraft music discs
This project is currently still in production and may not work correctly

## Installation

To install this you must have NODEJS and FFmpeg installed for it to properly worked (SUGGESTED NODEJS VERSION: 12.18.2)
First you must open settings.json and enter in your bot token.
Second you must open bot.js and change the voicechannel id to the id of your music voice channel. (REQUIRES DESKTOP DISCORD AND DEVELOPER MODE ACTIVATED)

## Usage

To use this bot type the command jb!play [SONG]
To skip a song type jb!skip
jb!debugvar is a test command to see if the variables are working correctly
jb!version to see info on the version

## Updates (V.1.0)

Bot Created

Song added: Cat

## Updates (V.1.1)

Songs split into functions to make easier to understand.

Songs added: Blocks, 13, and Chirp.

Fixed error with arguments not working correctly

Arguments split into their Capitalized function and Uncapitalized function

Changed const args = message.content.slice(prefix.length).split(' '); to const args = message.content.slice(prefix.length).split(/ +/);

Made it so the bot status will show version

## Updates (V.1.2)

All songs now successfully added

Fixed error where it would crash upon attempting to play another song while a song is already playing

Now is in a stable release

## Updates (V.1.3)

Changed jb!song to jb!play

Added skip command jb!skip

## Updates (V.1.4)

Added jb!version which gives info on the version

Split the versions into seperate folders

## Updates (V.1.5)

Added expansion 1 which adds a few of the base game songs 

Made expansion 1 toggle-able

## Updates (V.1.6)
Added ✅ before Playing SONG


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Info

Credit for the songs go to the respected owner, I did not make any of the songs, I created the bot though.
You may not claim this bot as your own.
