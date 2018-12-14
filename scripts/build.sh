## 
## build.sh
## 
## Usage:
## 
##     ./scripts/build.sh


## 
## Overhead
## 
## 
rm -rf scripts/build/
mkdir scripts/build/
exec 2>&1
dist=scripts/build/all.js
exec > >(tee -i $dist)


## 
## 
## 
## 
echo "["
index=0
for i in src/*/*.js; do
    [ -f "$i" ] || break
    value=$(<$i)
    if [ "$index" -ne "0" ]; then
        echo ","
    fi
    echo "$value"
    index=$(expr $index + 1)
done
echo $breadcrumbs
echo "]"


## 
## Overhead
## 
## 
mv scripts/build/all.js dist/all.js
rm -rf scripts/build/


## 
## Done
## 
## 
exit 0
