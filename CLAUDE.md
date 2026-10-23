# NeuMarry website (rootmate-site)

All rules, the status page and the edit lock live in the app repo **aimaster13679-del/rootmate**:
read its `CLAUDE.md`, `STATUS.md` and `LOCK.md` first, and run `bash tools/session.sh start "..."` from that repo
before changing anything here. One lock covers both repos. Never touch the Neutant repo.

- Pages are built by `python3 src/build.py` (sources in `src/`: landing, guides, pages, legal). Never edit the built
  `.html` files by hand; edit `src/` and rebuild.
- `app/` is the web app copied from rootmate by `scripts/publish_web.py`; do not edit it here.
- Website text is English only.
