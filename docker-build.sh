#!/bin/bash

docker run --rm -v $PWD:/work -w /work node bash /work/build.sh

