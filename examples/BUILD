# This is a comment
python_library(
    name = 'python_module',
    srcs = [
        glob(['**/*']),
        'python_module.py',
    ],
    # An inline comment
    visibility = ['//root/...'],
    deps = [
        '//python/sub_module:name_of_module',
        "//third_party/python:pandas",
        '//third_party/python:selenium',
    ],
)
