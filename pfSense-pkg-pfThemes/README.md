## On freebsd box


# Create makeplist
- `make clean makeplist` > pkg-plist

# Update pkg-plist
 - Remove the first line

# Make package
- `make package` or even `make clean package`
  - This uses pkg-plist, which is why pkg-plist needs to be updated in step 1-2
