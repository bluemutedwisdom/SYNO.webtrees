#!/bin/sh

chown -R root:root desktop webtrees ui
chmod -R 444 *
chmod -R a+X *
chmod -R u+rw *
tar -czf package.tgz -X exclude.txt desktop webtrees ui

chown -R root:root scripts CHANGELOG LICENSE INFO package.tgz PACKAGE_ICON.PNG
chmod -R 755 *
tar -cvf ../webtrees-1.5.2-001.spk -X exclude.txt scripts CHANGELOG LICENSE INFO package.tgz PACKAGE_ICON.PNG

exit 0