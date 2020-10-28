using Documenter, DocumenterCitations
# using BibInternal
# Documenter.Utilities.header_level(::BibInternal.Entry) = 1

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
    "Introduction"=>"numerical-range.md",
    "Properites"=>"numerical-range/properties.md",
    "Examples"=>nr_examples,
    "Generalizations"=>nr_generalizations,
    "Calculate"=>"numerical-range/calculate.md",
    "Animations"=>[
        "numerical-range/animations.md",
        "Numerical range of Ginibre matrix"=>"numerical-range/animations/ginibre.md"
    ],
]

ns_examples = [
    "numerical-shadow/examples.md",
    "2x2 matrices"=>"numerical-shadow/examples/2x2.md",
    "3x3 matrices"=>"numerical-shadow/examples/3x3.md",
    "4x4 matrices"=>"numerical-shadow/examples/4x4.md",
    "5x5 matrices"=>"numerical-shadow/examples/5x5.md",
    "6x6 matrices"=>"numerical-shadow/examples/6x6.md",
    "8x8 matrices"=>"numerical-shadow/examples/8x8.md",
    "9x9 matrices"=>"numerical-shadow/examples/9x9.md",
]

ns_generalizations = [
    "numerical-shadow/generalizations.md",
    "Restricted numerical shadow"=>[
        "numerical-shadow/generalizations/restricted-numerical-shadow.md",
        "Real numerical shadow"=>"numerical-shadow/generalizations/restricted-numerical-shadow/real-numerical-shadow.md",
        "Product numerical shadow"=>"numerical-shadow/generalizations/restricted-numerical-shadow/product-numerical-shadow.md",
        "Maximally entangled numerical shadow"=>"numerical-shadow/generalizations/restricted-numerical-shadow/entangled-numerical-shadow.md",
        "GHZ numerical shadow"=>"numerical-shadow/generalizations/restricted-numerical-shadow/ghz-numerical-shadow.md",
        "W numerical shadow"=>"numerical-shadow/generalizations/restricted-numerical-shadow/w-numerical-shadow.md",
        "``SU(2)`` coherent states"=>"numerical-shadow/generalizations/restricted-numerical-shadow/coherent-numerical-shadow.md",
    ]
]

ns_animations = [
    "A matrix of dimension 2"=>"numerical-shadow/animations/2x2.md",
    "A matrix of dimension 3"=>"numerical-shadow/animations/3x3.md",
    "A matrix of dimension 4"=>"numerical-shadow/animations/4x4.md",    
]

ns = [
    "Introduction"=>"numerical-shadow.md",
    "Properties"=>"numerical-shadow/properties.md",
    "Examples"=>ns_examples,
    "Generalizations"=>ns_generalizations,
    "Animations"=>ns_animations,
]

format = Documenter.HTML(
    prettyurls = !("local" in ARGS)
)

bib = CitationBibliography("references.bib")

makedocs(
    bib,
    authors="",
    format=format,
    sitename="numericalshadow.org",
    pages=[
        "Start"=>"index.md",
        "Numerical range"=>nr,
        "Numerical shadow"=>ns,
        "Software"=>[
            "Numerical range"=>"software/numerical-range.md",
            "Random matrices"=>"software/random-matrices.md"
        ],
        "Literature"=>"literature.md",
        "Presentations"=>"presentations.md",
        "Auxiliary definitions"=>[
            "GHZ states"=>"aux-definitions/ghz-state.md",
            "W states"=>"aux-definitions/w-state.md",
            "Dirac notation"=>"aux-definitions/dirac-notation.md",
        ],
        "External links"=>"links.md",
        "Acknowledgements"=>"acknowledgements.md",
        "Contact"=>"contact.md",
        "Cookie policy"=>"cookies.md"
    ]
    )

deploydocs(
    repo = "github.com/lpawela/numericalshadow.org.git"
)