window.SIDEBAR_ITEMS = {"fn":[["open_readonly_file_hack","HACK(Michael-F-Bryan): In theory, you shouldn’t be able to open a file in one of the [`OverlayFileSystem`]’s secondaries in write mode because the filesystem is meant to be readonly. However, Python does things like `open(\"./lib/python3.6/io.py\", \"rw\")` when importing its standard library and we want Python to work, so we’ll defer the [`FsError::PermissionDenied`] error until the first write operation."],["opening_would_require_mutations",""],["should_continue",""]],"struct":[["OverlayFileSystem","A primary filesystem and chain of secondary filesystems that are overlayed on top of each other."]]};