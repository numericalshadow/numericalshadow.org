using Documenter

nr_examples = [
    "numerical-range/examples.md",
    "2x2 matrices"=>"numerical-range/examples/2x2.md",
    "3x3 matrices"=>"numerical-range/examples/3x3.md",
    "4x4 matrices"=>"numerical-range/examples/4x4.md",
    "Random matrices"=>"numerical-range/examples/ginibre.md",
    "Doubly stochastic matrices"=>"numerical-range/examples/doubly-stochastic.md",
]

nr_generalizations = [
    "numerical-range/generalizations.md",
    "Resitrcted numerical range"=>[
        "numerical-range/generalizations/restricted-numerical-range.md",
        "Real numerical range"=>"numerical-range/generalizations/restricted-numerical-range/real-numerical-range.md",
        "Product numerical range"=>"numerical-range/generalizations/restricted-numerical-range/product-numerical-range.md",
        "Separable numerical range"=>"numerical-range/generalizations/restricted-numerical-range/separable-numerical-range.md",
        "Maximally entangled numerical range"=>"numerical-range/generalizations/restricted-numerical-range/maximally-entangled-numerical-range.md",
        "Coherent numerical range"=>"numerical-range/generalizations/restricted-numerical-range/coherent-numerical-range.md",
    ],
    "Quaternionic numerical range"=>"numerical-range/generalizations/quaternionic-numerical-range.md",
    "C numerical range"=>"numerical-range/generalizations/c-numerical-range.md",
    "Normalized numerical range"=>"numerical-range/generalizations/normalized-numerical-range.md",
    "Higher rank numerical range"=>"numerical-range/generalizations/higher-rank-numerical-range.md",
    "``p``-th matricial range"=>"numerical-range/generalizations/p-th-matricial-range.md",
    "``(p,k)`` numerical range"=>"numerical-range/generalizations/p-k-numerical-range.md",
    "Application of higher rank and ``(p,k)`` numerical range"=>"numerical-range/generalizations/application-of-higher-rank-and-p-k-numerical-range.md",
    "``k`` numerical range"=>"numerical-range/generalizations/k-numerical-range.md",
    "``q`` numerical range"=>"numerical-range/generalizations/q-numerical-range.md",
    #WHAT ABOUT A WITH RESP B
    "Maximal numerical range"=>"numerical-range/generalizations/maximal-numerical-range.md",
    "Joint numerical range"=>"numerical-range/generalizations/joint-numerical-range.md",
    "Essential numerical range"=>"numerical-range/generalizations/essential-numerical-range.md",
]

nr = [
    "Properites"=>"numerical-range/properties.md",
    "Examples"=>nr_examples,
    "Generalizations"=>nr_generalizations,
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