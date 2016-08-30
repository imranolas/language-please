# This is a comment
python_library(
    name = 'hargreaves_lansdown_scraper',
    srcs = ['hargreaves_lansdown_scraper.py'],
    deps = [
        '//my_net_worth/scrapers:base_scraper',
        "//third_party/python:pandas",
        '//third_party/python:selenium'
    ],
    visibility = ['//my_net_worth/...']
)

python_library(
    name = 'funding_circle_scraper',
    srcs = ['funding_circle_scraper.py'],
    deps = [
        '//my_net_worth/scrapers:base_scraper',
    ],
    visibility = ['//my_net_worth/...']
)

python_library(
    name = 'zoopla_scraper',
    srcs = ['zoopla_scraper.py'],
    deps = [
        '//my_net_worth/scrapers:base_scraper',
    ],
    visibility = ['//my_net_worth/...']
)

python_binary(
    name = 'asset_scraper_service',
    main = 'asset_scraper_service.py',
    deps = [
        '//common/protos:health_check',
        '//common/python:config',
        '//common/python:log_exceptions',
        '//common/python:quantity_utils',
        '//common/python:sentry',
        '//common/python:server_utils',
        '//common/python:time_conversion',
        '//my_net_worth/proto:asset_scraper_proto',
        '//my_net_worth/scrapers:funding_circle_scraper',
        '//my_net_worth/scrapers:hargreaves_lansdown_scraper',
        '//my_net_worth/scrapers:zoopla_scraper',
        '//third_party/python:gflags',
        ':foo',
    ],
    visibility = ['//my_net_worth/...', '//deployment/...']
)

python_library(
    name = 'base_scraper',
    srcs = ['base_scraper.py'],
    deps = [
        '//common/python:resources',
        '//third_party/python:chromedriver',
        '//third_party/python:selenium'
    ],
    visibility = ['//my_net_worth/...']
)
