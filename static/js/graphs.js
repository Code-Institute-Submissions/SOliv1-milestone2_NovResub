


queue()

    .defer(d3.csv, "data/populationcountry.json")
    .await(makeGraphs);

function makeGraphs(error, populationData) {
    var ndx = crossfilter(populationData);

    populationData.forEach(function(d){
        d.population = parseInt(d.population);

    })

    show_population(ndx);
    show_percent_population(ndx, "#percent-population");
    show_percent_area(ndx, "#percent-area");

    show__balance_population(ndx);
    show_average_area(ndx);
    show_rank_distribution(ndx);

    show_population_to_area_correlation(ndx);
    show__country__population_correlation(ndx);

    dc.renderAll();
}


function show__country_selector() {

    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();
    dc.selectMenu("#Country")

        .dimension(dim)
        .group(group);
}

function show_country(ndx, show__country__population_correlation, element) {

    var show_country = ndx.groupAll().reduce(
        function(p, v) {

            if (v.country === population) {

                p.count++;

                if(v.rank === "Country") {

                    p.show__balance_population++;

                }

            }

            return p;

        },

        function(p, v) {

            if (v.country === population) {

                p.count--;

                if(v.rank === "Country") {

                    p.any_population--;

                }

            }

            return p;

        },

        function() {

            return {count: 0, country: 0};

        },

    );


    dc.numberDisplay(element)

        .formatNumber(d3.format(".2%"))
        .valueAccessor(function (d) {

            if (d.count == 0) {

                return 0;

            } else {

                return (d.population / d.count);

            }

        })

        .group(any_country)

}

function show_population_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart("#population_balance")

        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxis().ticks(20);

}

function show_average_population(ndx) {
    var dim = ndx.dimension(dc.pluck('Population'));

    function add_item(p, v) {

        p.count++;
        p.total += v.population;
        p.average = p.total / p.count;
        return p;

    }



    function remove_item(p, v) {

        p.count--;
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;

        } else {

            p.total -= v.population;

            p.average = p.total / p.count;

        }

        return p;

    }


    function initialise() {

        return {count: 0, total: 0, average: 0};

    }

    var averagePopulationByCountry = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-Country")

        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(averagePopulationByCountry)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);

        })

        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Country")
        .yAxis().ticks(4);

}



function show_continent_area(ndx) {

        function continentByArea(dimension) {
        return dimension.group().reduce(


                p.total++);

    }


var dim = ndx.dimension(dc.pluck("Continent"),

    dc.barChart("#Continent")

        .width(400)
        .height(300)
        .dimension(dim)
        .group(continentByArea, "Continent")
        .valueAccessor(function(d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 1000;

            } else {

                return 0;

            }

        })

        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30});
}

 function show_population_to_area_correlation(ndx) {
          areaColors = d3.scale.ordinal()
        .domain(["Population", "Area"])
        .range(["red", "green"]);
    }

    var populationGroup = areaDim.group();
    var minPopulation = eDim.bottom(1)[0].area;
    var maxPopulation = eDim.top(1)[0].area;


    dc.scatterPlot("#Population-Area")
        .width(800)
        .height(400)
        .x(d3.scale.linear().domain([minPopulation, maxPopulation]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Area")
        .title(function(d) {

            return d.key[2] + "population" + d.key[1];

        })

        colorAccessor(function (d) {
            return d.key[3];

        })

        .colors(populationAreaColors)
        .dimension(populationDim)
        .group(populationAreaGroup)
        .margins({top: 10, right: 50, bottom: 75, left: 75});

}







