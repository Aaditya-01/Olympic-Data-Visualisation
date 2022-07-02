$id=-1;
function forward()
{
    if($id==-1)
        $id++;
    show($id);
    if($id>=-1 && $id<11)
       $id++;
    console.log($id);
}
function show($id){
    if($id==-1){
        document.getElementById('image').src='flag.jpg';
        document.getElementById("-1").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Olympics";
        document.getElementById("theory").innerHTML = "The Olympic Games are the world's only truly global, multi-sport, celebratory athletics competition. With more than 200 countries participating in over 400 events across the Summer and Winter Games, the Olympics are where the world comes to compete, feel inspired, and be together.";
    }
    if($id==0){
        document.getElementById('image').src='images/1/athleteSummer.png';
        document.getElementById("0").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Olympics and athletes participated in summer olympics";
        document.getElementById("theory").innerHTML = "The Summer Olympic Games , also known as the Games of the Olympiad, are a major international multi-sport event normally held once every four years. The inaugural Games took place in 1896 in Athens, Greece, and most recently the 2020 Summer Olympics were celebrated in 2021 in Tokyo, Japan. The Olympics have increased in scope from a 42-event competition programme with fewer than 250 male competitors from 14 nations in 1896 to 306 events with 11,238 competitors (6,179 men, 5,059 women) from 206 nations in 2016.";
    }
    if($id==1){
        document.getElementById('image').src='images/1/male-Female.png';
        document.getElementById("1").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Comparision of males and females participated in summer olympics";
        document.getElementById("theory").innerHTML = "Women competed for the first time at the 1900 Games in Paris. Of a total of 997 athletes, 22 women competed in five sports: tennis, sailing, croquet, equestrianism and golf.<br>The IOC is committed to gender equality in sport. The Olympic Charter, Chapitre 1, Rule 2.8, states that the IOC's role is: “to encourage and support the promotion of women in sport at all levels and in all structures with a view to implementing the principle of equality of men and women.”";
    }
    if($id==2){
        document.getElementById('image').src='images/2/athleteWinter.png';
        document.getElementById("2").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Olympics and athletes participated in winter olympics";
        document.getElementById("theory").innerHTML = "The Winter Olympic Games is a major international multi-sport event held once every four years for sports practiced on snow and ice. The first Winter Olympic Games, the 1924 Winter Olympics, were held in Chamonix, France. The modern Olympic Games were inspired by the ancient Olympic Games, which were held in Olympia, Greece, from the 8th century BC to the 4th century AD. The original five Winter Olympic Sports (consisting of nine disciplines) were bobsleigh, curling, ice hockey, Nordic skiing (consisting of the disciplines military patrol,[note 2] cross-country skiing, Nordic combined, and ski jumping), and skating (consisting of the disciplines figure skating and speed skating).";
    }
    if($id==3){
        document.getElementById('image').src='images/2/male-FemaleWinter.png';
        document.getElementById("3").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Comparision of males and females participated in winter olympics";
        document.getElementById("theory").innerHTML = "Women were barred from competing at the ancient Olympics, and were only allowed to enter limited events in the early days of the summer Olympic Games. At the first Winter Olympic Games in Chamonix in 1924, there were only 11 women participants out of the total 258 competitors. In fact there was only two events for women, the women's figure skating and mixed pairs.At 2014 the Winter Olympics, women competed in these 14 sports.";
    }
    if($id==4){
        document.getElementById('image').src='images/age/Age.png';
        document.getElementById("4").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Age of athletes";
        document.getElementById("theory").innerHTML = "When it comes to sports age matters. In olympics there is no age criteria thus any person who qalifies the eligibility critera on the basis of performance, participates.Youngest olympian til 2016 was 13 year old and oldest one was 57 years of age.";
    }
    if($id==5){
        document.getElementById('image').src='images/medal/summerGold.png';
        document.getElementById("567").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Comparision in medals and participation summer";
        document.getElementById("theory").innerHTML = "The Olympics have increased in scope from a 42-event competition programme with fewer than 250 male competitors from 14 nations in 1896 to 306 events with 11,238 competitors (6,179 men, 5,059 women) from 206 nations in 2016. Among them these are the countries with most athletes awarded by medals";
    }
    if($id==6){
        document.getElementById('image').src='images/medal/summerSilver.png';
        document.getElementById("567").style.color = "#a214f5";
    }
    if($id==7){
        document.getElementById('image').src='images/medal/summerBronze.png';
        document.getElementById("567").style.color = "#a214f5";
    }
    if($id==8){
        document.getElementById('image').src='images/medal/winterGold.png';
        document.getElementById("8910").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "Comparision in medals and participation winter";
        document.getElementById("theory").innerHTML = "The 1924 games in Chamonix proved to be a success when more than 250 athletes from 16 nations competed in 16 events.A record 2,800 athletes from 88 countries competed in 98 events in 2014.<br>As of 2022, twelve countries have participated in every Winter Olympic Games – Austria, Canada, Finland, France, Great Britain, Hungary, Italy, Norway, Poland, Sweden, Switzerland and the United States. Also, Czechoslovakia participated in all Winter Olympic Games before its dissolution and its successors, Czech Republic and Slovakia have participated in all Winter Games thereafter. Six of these countries have won medals at every Winter Olympic Games – Austria, Canada, Finland, Norway, Sweden, and the United States.";
    }
    if($id==9){
        document.getElementById('image').src='images/medal/winterSilver.png';
        document.getElementById("8910").style.color = "#a214f5";
    }
    if($id==10){
        document.getElementById('image').src='images/medal/winterBronze.png';
        document.getElementById("8910").style.color = "#a214f5";
    }
    if($id==11){
        document.getElementById('image').src='images/india/India.png';
        document.getElementById("11").style.color = "#a214f5";
        document.getElementById("theory-heading").innerHTML = "India And Olympics";
        document.getElementById("theory").innerHTML = "Indian athletes have won 35 medals, all at the Summer Games. For a period of time, the Indian Men's Field Hockey Team was dominant in Olympic competition, winning eleven medals in twelve Olympics between 1928 and 1980. The run included eight gold medals of which six were won consecutively from 1928 to 1956.";
    }

}
function backward(){
    if($id==11)
        $id--;
    if($id>=0 && $id<=11)
        $id--;
    show($id);
    console.log($id);
}