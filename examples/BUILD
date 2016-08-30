# This is a comment
python_library(
    name = 'python_module',
    srcs = [glob(['**/*']), 'python_module.py'],
    deps = [
        '//python/sub_module:name_of_module',
        "//third_party/python:pandas",
        '//third_party/python:selenium'
    ],
    # An inline comment
    visibility = ['//root/...']
)
