using Documenter

makedocs(
    authors="",
    sitename="numericalshadow.org",
    pages=[
        "Start"=>"index.md",
        "Numerical range"=>[
            "Properites"=>"numerical-range/properties.md"
            "Examples"=>[
                "2x2 matrices"=>"numerical-range/examples/2x2.md"
            ]
        ]
    ]
    )