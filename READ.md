| Behavior                                                                                                 | Input Example | Output Example |
|----------------------------------------------------------------------------------------------------------|---------------|----------------|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 3             | 3              |
| The program adds "way" to single-letter words end with a vowel.                                    | i             | iway           |
| The program adds "way" to multiple-letter words beginning with a vowel.                                  | apple         | appleway       |
| For words beginning with one consonant, move the first consonant to the end,| box | oxb|
| For words beginning with a consonant, move the first consonant to the end and add "ay" to the end | box              | oxbay                
|For words beginning with multiple consonants, move all of the first consecutive consonants to the end, and add "ay" to the end| share | areshay|
|For words beginning with "qu" move the "u"  to the end along with the "q", add "ay" | question | estionquay|
|For words with multiple consecutive consonants including "qu", move the "u" along with the "q" to the end, add "ay"| sequel| uelsquay| For words begining with "y" treat y as a consonant| yellow | ellowyay |
For words containing "y" *not at the beginning, do nothing to the letter "y"| party | artypay|
| Every word in the in the user has the previous behaviors applied| The quick brown fox over the squeling dog | heTay ickquay rownbay oxfay veroway hetay elingsquay ogday.