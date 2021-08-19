#!/usr/bin/env bash
set -e # halt script on error

make build
make test
