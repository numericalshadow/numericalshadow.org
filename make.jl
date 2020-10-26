using Documenter

nr_examples = [
    "numerical-range/examples.md",
    "2x2 matrices"=>"numerical-range/examples/2x2.md",
    "3x3 matrices"=>"numerical-range/examples/3x3.md",
    "4x4 matrices"=>"numerical-range/examples/4x4.md",
    "Random matrices"=>"numerical-range/examples/ginibre.md",
    "Doubly stochastic matrices"=>"numerical-range/examples/doubly-stochastic.md",
]

nr = [
    "Properites"=>"numerical-range/properties.md",
    "Examples"=>nr_examples,
    "Generalizations"=>[
        "numerical-range/generalizations.md",
    ],
    "Calculate"=>"numerical-range/calculate.md",
    "Animations"=>[
       "numerical-range/animations.md",
        "Numerical range of Ginibre matrix"=>"numerical-range/animations/ginibre.md"
    ],
]

makedocs(
    authors="",
    sitename="numericalshadow.org",
    pages=[
        "Start"=>"index.md",
        "Numerical range"=>nr
    ]
    )

deploydocs(
    repo = "github.com/lpawela/numericalshadow.org.git"
)