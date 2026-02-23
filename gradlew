#!/usr/bin/env sh
set -e
if [ -z "$JAVA_HOME" ]; then
  JAVA_HOME=/root/.local/share/mise/installs/java/17.0.2
  export JAVA_HOME
  export PATH="$JAVA_HOME/bin:$PATH"
fi
exec gradle "$@"
