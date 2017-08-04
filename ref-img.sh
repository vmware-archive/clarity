if [ "$TEST_SUITE" = "css:test --set set1" ]; then
    wget $SET1;
    unzip screenshots.zip;
elif [ "$TEST_SUITE" = "css:test --set set2" ]; then
    wget $SET2;
    unzip screenshots.zip;
else
    echo "This job is not for css testing. Skipping fetching screenshots."
fi
