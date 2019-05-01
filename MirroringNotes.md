# Mirroring

## Approach

This has been mirrored with the intent of being as re-hostable as possible, using the following wget command:

```shell
wget \
    --mirror \
    --no-parent \
    --no-host-directories \
    --convert-links \
    --cut-dirs=1 \
    --page-requisites \
    --no-if-modified-since \
    'http://home.earthlink.net/~ellozy/'

dos2unix *
```

## Notes

Previously used `--adjust-extension` however this was incorrectly modifying CSS links