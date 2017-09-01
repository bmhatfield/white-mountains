# white-mountains
Mirror of Ellozy's White Mountain Peakbagging Site

##### Explanation
For those working on peakbagging the White Mountain 4000'ers, Mohamed Ellozy's site is a treasure. It's much faster to get a quick synopsis of time and distance from his site than any guidebook - especially when multiple trails are involved.

Unfortunately, it's hosted on home.earthlink.net, which could disappear any day. Even if it stays up, it's subject to request limits that bring it offline temporarily for days at a time.

Rather than allow this to disappear from the internet, I've mirrored this here.

##### Approach
This has been mirrored with the intent of being as re-hostable as possible, using the following wget command:

```
wget \
    --mirror \
    --no-parent \
    --no-host-directories \
    --convert-links \
    --adjust-extension \
    --cut-dirs=1 \
    --page-requisites \
    'http://home.earthlink.net/~ellozy/'

dos2unix *
```
