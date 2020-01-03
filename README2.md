# milestone2
# milestone Project

###Continued from README.md

## UX Experience
The aim in this project is to take raw data, presumably formatted as JSON, and: present it in a format thatʼs user-friendly (charts, tables, etc.), allow the user to interact with it (e.g. sort a table, narrow down to a subset of the data, etc.), and potentially derive some insight from the data.

This project will be called "Earth's Future"
Our World's Future - Lets maintain our beautiful World
Statistics and wildlife anyalictics as a guide to how we can readdress the balance and reverse climate change
resources and links to data and other websites.
Readdress the balance of population and Country / Continent and Habitat and Species and how they correlate with each other. Reverse Climate Change in theory via data correlation and achieving a balanced perspective to try to understand the real world and what can be done to achieve this in practice.


Statistics and wildlife anyalictics as a guide to how we can readdress the balan
resources and links to data and other websites.  
Readdress the balance of population and  Country / Continent and Habitat and Species and how they correlate with each other.
Reverse Climate Change in theory via data correlation and achieving a balanced perspective to try to understand the real world and what can be done to achieve this in practice.

#### The Cards
create a climate change dataset.
Add data and graphs explaining the data. Finding solutions
What are the solutions.
Implementing the solutions for planet health.


### Earth Focus - population by country/continent and area measurement - *not started yet- future possibility.
I am creating a dynamic dashboard showcasing the data between Country / Continent and Area.
Population Levels and comparisons between countries and Continents. I want the end user to be able to choose different graphs to show the way data interacts and compares.
Continent A string like 'Europe' and the Continent is the same as Country. "In t
### Earth Focus - population by country/continent and area measurement
https://soliv1.github.io/milestone2/barchart.html
I am creating a dynamic dashboard showcasing the data between Country / Continent and Area.  
#### (I ran out of time so did not includethis in the end).  
Population Levels and comparisons between countries and Continents. I want the end user to be able to choose different graphs to show the way data interacts and compares.
I am using a combination of my tutorials and libraries to create my graphs. I had selected code from #Stack Overflow to assist with colouring my barcharts.
Please find a wireframe and other info and datasets (using wget methed in terminal) in the docs folder attached.
## Technologies Used
-Jquery to demonstrate DOM manipulation
@@ -90,6 +94,9 @@ I appear to have a lack of understanding on how to manipulate information in the
Since I am currently  unable to master the making of my graphs and have run out of time - I have decided that I shall be submitting this project minus at least two of them.  I hope that I shall be able to resolve these issues in future, as I move on in the course.
#### Could not make multiple colours appear in my barchart one.
https://d2264e7f-c97d-48d2-b0ad-7b63896e9c67.ws-eu01.gitpod.io/#/workspace/milestone2
.colorAccessor(function (d) {
            if (d.value > 12)   {
                return "Country";
Since I am currently  unable to master the making of my graphs and have run out
        })

#### scatterplot
Could not make the graph appear with the data for measurements of area and population and dimension - country.  I tried different information from different datasets (see docs folder for ideas and wireframes and datasets), but only got into strife so went back to a basic dataset example.
https://soliv1.github.io/milestone2/scatterplot.html

#### My Picchart
My piechart is not perfect but I am reasonably happy with it.
https://soliv1.github.io/milestone2/piechart.html

#### barcharts2 and dashboard 

#### My Barchart should look like this :

https://soliv1.github.io/milestone2part1graphs/

For some reason I could not deploy it properly on the website.

Ditto as above with scatterplot.  I need to build a better understanding of the process of creating interactive dashboards as I like them and am determined to master this situation at some point.  I feel that I am close but I am just not quite grasping it and am waiting for the "lightswitch to come on".  So I have since populated the site with some pretty pictures of graphs to illustrate until I am finally figure them out.  
### ReadME.md Continued at: <link rel="" href="./docs/README.md" type="text/css" />


## BUGS
THE FOLLOWING CODES ARE ALL BUGS WHICH I HAVE HAD A GREAT DEAL OF TROUBLE RENDERING AND DEPLOYING INCLUDING MY HOME PAGE.

<!DOCTYPE html>
<html lang="en">
<head>

<body>
    <div>
        <div class="menu" style="width:200px;">
        <select class="dc-select-menu">
            <option value="">Select all</option>
            <option class="dc-select-option" value="Country">Country</option>
            <option class="dc-select-option" value="Population">Population</option>
            <option class="dc-select-option" value="Population">Continent</option>
            <option class="dc-select-option" value="Area">Area</option>
        </select>
        <p>Legend</p>
        <div id="discipline-selector"></div>
        <div id="population-balance"></div>
        <div id="specific-country"></div>
        <div id="specific-continent"></div>
        <div id="average-area"></div>
    </div>


    <div>
        <h3>Total Population per Country</h3>
        <div id="per-country-chart"></div>
    </div>

    <div>
    <div id="container">
        <div class="row">
            <nav>
                <ul>
                    <li id="logoNav">Earth Focus</li>
                    <li><a href="index.html#part1graphs_btn">Home</a></li>
                    <li><a href="barchart.html">BarChart</a></li>
                    <li><a href="piechart.html">PicChart</a></li>
                    <li><a href="scatterplot.html">ScatterPlot</a></li>
                </ul>
            </nav>
            <div class="col-6-8">
                <div class="card graph1" >
                    <h3>Total Population per Country</h3>
                <div id="per-country-chart"></div>
            </div>
        </row>
        <div>
        <div class="card graph2" >
        <h3>Total Population Per Continent</h3>
        <div id="per-continent-chart"></div>
        </div>
        <div>
        <div class="card graph3" >
    </div>
    <div>
        <h3>Total Area Per Continent</h3>
        <div id="per-area-chart">
        </div>
        <div id="per-area-chart"></div>
    </div>
    <script>
            queue()
        queue()
            .defer(d3.json, "data/populationcountry.json")
            .await(makeGraphs);
        dc.selectMenu("#container_id")
            .dimension(dim);
            .group(group);
        dc.barChart
        chart
            .colorAccessor(function (d) {
            if (d.value > 12)   {
                return "Country";
@@ -86,7 +65,7 @@ <h3>Total Area Per Continent</h3>
                return "test4";
            }
        })
            function makeGraphs(error, populationcountryData)   {
    function makeGraphs(error, populationcountryData)   {
            var ndx = crossfilter(populationcountryData);
            var country_dim = ndx.dimension(dc.pluck('Country'))
            var total_population_per_country = country_dim.group().reduceSum(dc.pluck('Population'));
@@ -137,4 +116,5 @@ <h3>Total Area Per Continent</h3>
        }
    </script>

My tutors and my Mentor Brian who has been very patient in helping me to underst
##### I did not use jasmine as I did not fully understand it and also probably did not need too either on this project.  

### Bugs

#### Home Page
 My layout is still not right but I am still working on this.
#### Home Page - major bug issue 

#### unresolved
Below is the link to a home page I created but cannot deploy as somehow the links have caused issues with both my bar chart and my pie chart not rendering on the webpage.

https://8000-d2264e7f-c97d-48d2-b0ad-7b63896e9c67.ws-eu01.gitpod.io/piechart.html

 My layout is still not right but I am still working on this.  It is unresolved.  For some reason the last page on the website has become the home page.

https://8000-d2264e7f-c97d-48d2-b0ad-7b63896e9c67.ws-eu01.gitpod.io/index.html#part1graphs_btn

oops it looks like I have lost both home pages but hopefully they are in my history on gitbub.
Apologies for this.

Another example of my home page above I am unable to deploy due to menu links - Both home pages are interactive using Jquery.

#### My social links moved to the right hand side when I deployed it in github. I am not sure quite why.

 16  js/emailSend.js 
This file was deleted.


@@ -6,21 +6,6 @@ $(document).ready(function() {
    });
});

    $("#barChart2_html").on("click", function() {
        $(".barchart2").removeClass('highlight_barchart');
        $(".piechart").removeClass('highlight_graph');
        $(".scatterplot").removeClass('highlight_graph');
        $(".barchart2").addClass('highlight_graph');
    });

    $("#barChart4_html").on("click", function() {
        $(".barchart2").removeClass('highlight_graph');
        $(".piechart").removeClass('highlight_graph');
        $(".scatterplot").removeClass('highlight_graph');
        $(".scatterplot").addClass('highlight_graph');
    });



    $(document).ready(function() {
    $("#button_effects1").click(function(){
@@ -93,19 +78,7 @@ $(document).ready(function() {
        $("h2").addClass( "h2_color");
    });
});
    /*
    this will apply larger font size to the active h2 element
    by adding the h2_font_size class but
    not the other h2 elements by removing class h2_font_size from them
    */

    $("#hr_html").hover(function(){
        $("#hr_barchart").removeClass("h2_font_size");
        $("#hr_barchart2").removeClass("h2_font_size");
        $("#hr_scatterplot").removeClass("h2_font_size");
        $("#hr_piechart").removeClass("h2_font_size");
    });
});

    //applies colour black to body background when mouse enters over buttons

    $(".bottom_button").mouseenter(function(){
@@ -116,4 +89,5 @@ $(document).ready(function() {

    $(".bottom_button").mouseleave(function(){
        $("body").piechart( "background-color", "#eee"); 
    }); 
    });
});     
 192  piechart.html 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Earth Focus</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
    <link href="css/style.css" rel="stylesheet">
    <title>Earth Focus PieChart</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />


    <script src="https://kit.fontawesome.com/1e03de6694.js" crossorigin="anonymous"></script>
    <style>
        div {
            clear: left;
        }
    </style>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js"></script>
</head>
<body>
    <div>
        <div class="menu" style="width:200px;">
        <select class="dc-select-menu">
            <option value="">Select all</option>
            <option class="dc-select-option" value="Country">Country</option>
            <option class="dc-select-option" value="Population">Population</option>
            <option class="dc-select-option" value="Population">Continent</option>
            <option class="dc-select-option" value="Area">Area</option>
        </select>
    </div>

    <div id="container">
     <!-- Start-main-menu-->
        <nav>
            <ul>
                <li id="logoNav">Earth Focus</li>
                <li><a href="index.html#part1graphs_btn">Scroll Down</a></li>
                <li><a href="barchart.html">BarChart</a></li>
                <li><a href="barchart2.html">BarCharts2</a></li>
                <li><a href="piechart.html">PieChart</a></li>
                <li><a href="scatterplot.html">ScatterPlot</a></li>
            </ul>
        </nav>
         <!-- End-main-menu-->
         <!-- Start-graph-cards-->
        <div class="card graph1">
            <li id="part1graphs_btn"></li>
            <img class="card_image" src="img/1.png" alt=" icon"graph>
            <div class="card_bottom">
                <h2 class="card_head">Graph One</h2>
                <p class="card_par1"></p>
                <button class="bottom_button" id="button_effects1"><a href="barchart.html">Button</a>
                </button>
            </div>
        </div>
        <div class="card graph2_btn">
            <li id="graph2_btn"></li>
            <img class="card_image" src="img/2.png" alt="scatterplot icon">
            <h2 class="card_head">Scatterplot</h2>
            <p class="card_par2"></p>
            <button id="button_effects2" class="bottom_button"><a href="scatterplot.html">Button</a>
            </button>
        <div class="row">
            <nav>
                <ul>
                    <li id="logoNav">Earth Focus</li>
                    <li><a href="index.html#part1graphs_btn">Home</a></li>
                    <li><a href="barchart.html">BarChart</a></li>
                    <li><a href="barchart2.html">BarChart</a></li>
                    <li><a href="piechart.html">PicChart</a></li>
                    <li><a href="scatterplot.html">ScatterPlot</a></li>
                </ul>
            </nav>
        </div>
        <div class="card graph3">
            <li id="graph3_btn"></li>
            <img class="card_image" src="img/3.png" alt="graph icon">
            <h2 class="card_head">Bar-Chart</h2>
            <p class="card_par3"></p>
            <button id="button_effects3" class="bottom_button"><a href="barchart2.html">Button</a>
            </button>
    </div>        
    <h3>Total Population Per Country</h3>
    <div id="per-Country-chart"></div>    </div>
    <div>
        <h3>Total Population Per Continent</h3>
        <div id="per-Continent-chart"></div>
    </div>
    <div>
        <h3>Total Area Per Continent</h3>
        <div id="per-Area-chart"></div>
    </div>

    <script>
        queue()
            .defer(d3.json, "data/populationcountry.json")
            .await(makeGraphs);
        function makeGraphs(error, populationcountryData) {
            var ndx = crossfilter(populationcountryData);
            var country_dim = ndx.dimension(dc.pluck('Country'));
            var total_population_per_country = country_dim.group().reduceSum(dc.pluck('Population'));
            dc.pieChart('#per-Country-chart')
                .height(330)
                .radius(90)
                .transitionDuration(1500)
                .dimension(country_dim)
                .group(total_population_per_country);
            var continent_dim = ndx.dimension(dc.pluck('Continent'));
            var total_population_per_continent = continent_dim.group().reduceSum(dc.pluck('Population'));
            dc.pieChart('#per-Continent-chart')
                .height(330)
                .radius(90)
                .transitionDuration(1500)
                .dimension(continent_dim)
                .group(total_population_per_continent);
            var area_dim = ndx.dimension(dc.pluck('Area'));
            var total_area_per_continent = continent_dim.group().reduceSum(dc.pluck('Area'));
            dc.pieChart('#per-Area-chart')
                .height(330)
                .radius(90)
                .transitionDuration(1500)
                .dimension(continent_dim)
                .group(total_area_per_continent);
            dc.renderAll();
        }
    </script>

    <div id="my_footer">
        <div class="col-sm-4">
            <p id="copyright">Copyright Infomation</p>
        </div>
        <div class="card graph4">
            <li id="graph4_btn"></li>
            <img class="card_image" src="img/4.png" alt="pie graph">
			<div class="card_bottom">
				<h2 class="card_head">Pie Graph</h2>
                <p class="card_para">United Nations makes projections for future population growth.
                 Latest median projection focuses on a population of 9.7bn in 2050 and 10.9bn in 2100. As number of factors affect population growth, projections can therefore depend on different assumptions.
                 Within a 95% certainty range, the difference in population in 2100 from the highest to lowest projection increses to  a total of almost 4bn people - more than half the population we have today.
                 *Info gathered from the website of populationmatters.org
                </p>
                <button id="button_effects4" class="bottom_button"><a href="piechart.html">Button</a>
                </button>
            </div>
        </div>
         <!-- End-graph-cards-->


        <section class="container-fluid">
            <div class="row"><h4 class="contact-us">Contact us to find out more</h4>
                <div class="col">
                    <h3 class="contact-heading uppercase text-center">Want to find out more about Earth Focus data projects ?</h3>
                    <h5 class="uppercase text-center">Contact us and let's work together!</h5>

                    <div class="center-form">
                    <form>
                        <input type="text" name="name" id="fullname" class="form-control" placeholder="Name" required />
                        <input type="email" name="email" id="emailaddress" class="form-control" placeholder="Email" required />
                        <textarea rows="5" name="informationsummary" id="informationsummary" class="form-control" placeholder="description" required></textarea>
                        <div class="form-row text-center">
                            <div class="col">
                            <button type="submit" class="btn btn-secondary">Send us a Request</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

          <!-- Start-Social-links-->
        <div class="my_footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <h5 class="uppercase general-sub">Earth Focus Social</h5>
                        <ul class="list-inline social-links">
                        <li><a target="_blank" href="https://facebook.com"><i class="fab fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a target="_blank" href="https://github.com"><i class="fab fa-github-square"></i></a></li>
                        <li><a target="_blank" href="https://linkedin.com"><i class="fab fa-linkedin"></i></a></li>
                        <li><a target="_blank" href="https://pinterest.com"><i class="fab fa-pinterest-square"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com"><i class="fab fa-instagram"></i></i></a></li>
                        <li><a target="_blank" href="https://youtube.com"><i class="fab fa-youtube-square"></i></a></li>
                    </ul>
                </div>
                <div>
                <p id="copyright">Copyright Infomation</p>
                </div>
            </div>
        </footer>
    <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    </div>              
</body>
</html>


### The Cards
create a climate change dataset. Add data and graphs explaining the data focus on wildlife and world population and how it is affecting the planet. How we can analyse and understand the data to make positive decisions going forward. Sustainable cities Population Control Saving wildlife from extinction by providing and reversing their dwindling habitats Respect for wildlife and food sources Finding solutions What are the solutions Implementing the solutions for planet health

#### Earth Focus - population by country/continent and area measurement
I am creating a dynamic dashboard showcasing the data between Country / Continent and Area.
-the dashboard did not happen for me in the end. but intend to add at some stage together with an interactive map.
#### Population Levels and comparisons between countries and Continents. I want the end user to be able to choose different graphs to show the way data interacts and compares.
I am using a combination of my tutorials and libraries to create my graphs. I had selected code from #Stack Overflow to assist with colouring my barcharts.

##### Earth focus-2 scatter plot
Continent A string like 'Europe' and the Continent is the same as Country. "In the lessons when we parse the results it is either because the data has a string and we want a number or when the data is one timestamp and we want another. A scatterplot is a chart best suited to plotting two numbers against each other so try Area versus Population". As quoted by a tutor on my course. So I am demonstrating a correlation with population verses area, using a scatterplot.

#####Earth Focus - population by country/continent and area measurement
I am creating a dynamic dashboard showcasing the data between Country / Continent and Area.
(I ran out of time so did not includethis in the end).
Population Levels and comparisons between countries and Continents. I want the end user to be able to choose different graphs to show the way data interacts and compares.

I am using a combination of my tutorials and libraries to create my graphs. I had selected code from #Stack Overflow to assist with colouring my barcharts.

### Technologies Used
-Jquery to demonstrate DOM manipulation -Bootstrap Cosmos to help with styling -D3 helps bring data to life using HTML, SVG, and CSS. It allows User to create anything from an HTML table to a Pie chart, from -graphs and bar charts to geospatial maps -Make graph technologies; Crossfilter / DC / JSon
github to deploy my website; AWS Cloud9 followed by gitpod as soon as I heard thichs was available I swithced over to the gitpod platform as I found it more straight forward to use. "wget" command to retrieve data from other websites and json.

#### Types of Fields
Differences Measurements and Dimensions
There are two types of fields, dimensions and measures, based on the role they play in the data:
Measures are quantitative fields, meaning theyʼll always be of type number.
Dimensions are fields that act as labels/names/buckets/categories. They could be of any type, including number. The following can be used to tell whether a field is a measure or a dimension before becaming second nature:
i) Is it a number? If not itʼs definitely a dimension. ii) If it is: Does it represent a quantity/ can you perform some mathematical operation on it? iii) If so, itʼs a measure, if not, itʼs a dimension. For instance, a phone number contains numbers, but isnʼt really a quantity (adding/multiplying/dividing, etc. two phone numbers does not make mathematical sense).

#### Presenting the Data
D3 provides tools to generate charts out of JSON data. These charts could be tied to each other i.e. filtering on one chart affects the other charts at once (Iʼm sure youʼve seen this in the examples). The most common charts are: Tables - Self-explanatory, you can have as many measures and dimensions as you want in these. Simple bar/column charts - one dimension, one measure. Each bar/column represents an instance of the dimension field (e.g. a specific country), and its height/length is the magnitude of the measure (the countryʼs area). Scatter plots - one dimension, two measures. Each dot is an instance of the dimension field (e.g. specific country) and its horizontal and vertical position on the chart represent the magnitude of the first and second measure respectively. Donut/Pie chart - one dimension, one measure. Line graph - two measures (self-explanatory), or one dimension and one measure, where the dimension is represents values that are continuous in nature, for example time.

###  Credits
Cover page inspired by my course work in Code Institute Bckground image is a preview page from Adobe stock images (from which I have and account) My Mentor Brian Mancheria for helping me to try to understand the logistics of Java script and providing me with info to outline a project for myself -The Tutor support -The Slack Community =Thw World Data Bank for data on Population and Environement issues-Popululation Matters Data -Populataion Matters Images where indicated -DC.JS GETTING STARTED AND HOW-TO GUIDE -© 2019 GitHub, Inc. -Diff Checker: https://www.diffchecker.com/
My tutors and my Mentor Brian who has been very patient in helping me to understand java script and graphs.

### Tests
##### github-the four box cover page was not evenly distributed in two rows of two boxes as it was in gitpod; 
##### edge-social links were slightly different colours; 
##### firefox and chrome.  
##### I did not use jasmine as I did not fully understand it and also probably did not need too either on this project.  

## Bugs Continued.....
#### Home Page
 My layout is still not right but I am still working on this.

#### My social links moved to the right hand side when I deployed it in github. I am not sure quite why.

I have had considerable problems with this project and my understanding of java script and how it works.

I really hope to be able to iron these out in time hence the project being unfinished. I have not managed to resolve these issues yet. I appear to have a lack of understanding on how to manipulate information in the making of the graphs and the calculations involved. Hence I having trouble making my graphs appear and despite the console addressing issues - I was unable to resolve them. (Although, I did manage to go through the course modules ok). Since I am currently unable to master the making of my graphs and have run out of time - I have decided that I shall be submitting this project minus at least two of them. I hope that I shall be able to resolve these issues in future, as I move on in the course.

I could not make multiple colours appear in my barchart.html.
.colorAccessor(function (d) { if (d.value > 12) { return "Country"; } if (d.value > 9) { return "Continent"; } if (d.value > 6) { return "test3"; } if (d.value > 3) { return "test4"; } })

#### scatterplot.html
Could not make the graph appear with the data for measurements of area and population and dimension - country. I tried different information from different datasets (see docs folder for ideas and wireframes and datasets), but only got into strife so went back to a basic dataset example.

#### barchart2.html and dashboard
As above with scatterplot.
Cannot figure out at this stage how and where the following select menu should go in my barchart page and how it links up with the html menu and all the charts:
       
    <div class="menu" style="width:200px;">            
    <select class="dc-select-menu">
            <option value="">Select all</option>
            <option class="dc-select-option" value="Country">Country</option>
            <option class="dc-select-option" value="Population">Population</option>
            <option class="dc-select-option" value="Population">Continent</option>
            <option class="dc-select-option" value="Area">Area</option>
        </select>

         dc.selectMenu("#container_id")     
            .dimension(dim);
            .group(group);

I need to gain a better understanding of the process of creating interactive dashboards as I like them and am determined to master this situation at some point. I feel that I am close but I am just not quite grasping it and am waiting for the "lightswitch to come on". So I have since populated the site with some pretty pictures of graphs to illustrate until I am finally figure them out.

Finally I understand it is not good practice to add the script to the same page as the html.  
However, since I have broken things so many times during the building of this project, I just decided to leave things where they are for now.



