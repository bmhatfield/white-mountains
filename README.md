# white-mountains
Mirror of Ellozy's White Mountain Peakbagging Site

### Explanation
For those working on peakbagging the White Mountain 4000'ers, Mohamed Ellozy's site is a treasure. It's much faster to get a quick synopsis of time and distance from his site than any guidebook - especially when multiple trails are involved.

Unfortunately, it's hosted on `home.earthlink.net`, which could disappear any day. Even while it stays up, it's subject to request limits that bring it offline temporarily for days at a time at the end of the month.

Rather than allow this to disappear from the internet, I've mirrored it here.

I have attempted to contact Mohamed, but have not been able to locate contact information for him. If you have information on how to contact Mr. Ellozy to inform him of this mirror so that I may offer more permanent rehosting, please reach out to me via Github Issues on this repository.

### Approach
This has been mirrored with the intent of being as re-hostable as possible, using the following wget command:

```
wget \
    --mirror \
    --no-parent \
    --no-host-directories \
    --convert-links \
    --cut-dirs=1 \
    --page-requisites \
    'http://home.earthlink.net/~ellozy/'

dos2unix *
```


### Notes:
Previously used `--adjust-extension` however this was incorrectly modifying CSS links
