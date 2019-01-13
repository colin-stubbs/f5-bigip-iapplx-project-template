#!/bin/bash

# ensure jshint installed for rpmbuild to use
echo
echo "Installing jshint"
echo
npm install jshint

# build RPM
echo
echo "Running rpmbuild"
echo
rpmbuild -bb --target=noarch --define "_topdir `pwd`" iapplx-project-template.spec

# EOF
