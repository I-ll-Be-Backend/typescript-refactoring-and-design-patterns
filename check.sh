#!/bin/sh
# Compiles every step of every lesson in node:22-slim: the check each lesson passed before its video went out.
# Needs Docker. A step folder holding .nocheck does not compile on purpose and is skipped.
docker run --rm --entrypoint /bin/sh -v "$PWD:/w" node:22-slim -c '
npm i -g --silent typescript@5.6.3 >/dev/null 2>&1
cd /w; fail=0
for f in */step-*/*.ts; do
  [ -e "$f" ] || continue
  [ -e "$(dirname "$f")/.nocheck" ] && continue
  d=$(mktemp -d)
  if ( tsc --noEmit --strict --target es2022 --lib es2022 $f ) >/tmp/log 2>&1; then echo "ok    $f"; else echo "FAIL  $f"; cat /tmp/log; fail=1; fi
done
exit $fail'
