using Documenter

makedocs(
    authors="",
    sitename="numericalshadow.org",
    pages=[
        "Start"=>"index.md",
        "Numerical range"=>[
            "Properites"=>"nr/properties.md"
            "Examples"=>[
                "2x2 matrices"=>"nr/examples/2x2matrices.md"
            ]
        ]
    ]
    )