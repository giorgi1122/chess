var arrofblack=document.getElementsByClassName("white");
var arrofwhite=document.getElementsByClassName("black");
const  arry=['white',"rgb(36, 169, 202)"]; 

const  index=["White_Rooks","White_Knights","White_Bishops",
              "White_King","White_Queen","White_Pawns",
              "Black_Rooks","Black_knights","Black_Bishops",
              "Black_Queen","Black_King","Black_Pawns" ]
              

function clik(cor){
    for(var i=0;i<32;i++){
        arrofblack[i].style.backgroundColor=arry[0];
        arrofwhite[i].style.backgroundColor=arry[1];
    }
    if(document.getElementById(cor).childNodes.length==1){

        document.getElementById(cor).style.backgroundColor = "blue";

        var Coordinate=cor.split(":");
        var X_Coordinate=parseInt(Coordinate[0]);
        var Y_Coordinate=parseInt(Coordinate[1]);

       

        var  Pieces_Name=document.getElementById(cor).firstChild.alt;

        //function which check Pieces 
        WhichPiece(Pieces_Name,X_Coordinate,Y_Coordinate)
    }

} 
 

// color functions
function Make_Coral(i , j){
    document.getElementById(i + ":" + j).style.backgroundColor = "Coral";
}
function Make_Red(i , j){
    document.getElementById(i + ":" + j).style.backgroundColor = "Red";
}


//checkers
function Is_Empty(i , j){
    //console.log(document.getElementById(i+":"+j).childNodes.length);
    return document.getElementById(i+":"+j).childNodes.length;
}
function Is_White_Pieces(i , j){
    //console.log(document.getElementById(i+":"+j).childNodes)
    return document.getElementById(i+":"+j).childNodes.length && document.getElementById(i+":"+j).firstChild.alt.split("_",1) == "White";
}
function Is_Black_Pieces(i , j){
    //console.log(document.getElementById(i+":"+j).childNodes)
    return document.getElementById(i+":"+j).childNodes.length && document.getElementById(i+":"+j).firstChild.alt.split("_",1) == "Black";
}



function WhichPiece(Pieces_Name,X_Coordinate,Y_Coordinate){
    //which piece
    if(Pieces_Name == index[6]){
        BlackRook(X_Coordinate,Y_Coordinate);
    }
    if(Pieces_Name  == index[0]){
       WhiteRook(X_Coordinate,Y_Coordinate);
    }
    if(Pieces_Name == index[8]){
        BlackBishop(X_Coordinate,Y_Coordinate);
    }
    if(Pieces_Name == index[2]){
        WhiteBishop(X_Coordinate,Y_Coordinate);
    }
    if(Pieces_Name == index[9]){
        BlackQueen(X_Coordinate,Y_Coordinate);
    }
    if(Pieces_Name == index[4]){
        WhiteQueen(X_Coordinate,Y_Coordinate);
    }
    if(Pieces_Name == index[10]){
        BlackKing(X_Coordinate,Y_Coordinate) 
    }
    if(Pieces_Name == index[3]){
        WhiteKing(X_Coordinate,Y_Coordinate)
    }
    if(Pieces_Name == index[11]){
        BlackPawn(X_Coordinate,Y_Coordinate)
    }
    if(Pieces_Name == index[5]){
        WhitePawn(X_Coordinate,Y_Coordinate)
    }
    if(Pieces_Name == index[7]){
        BlackKnight(X_Coordinate,Y_Coordinate)  
    }
    if(Pieces_Name == index[1]){
        WhiteKnight(X_Coordinate,Y_Coordinate)
    } 
    console.log(index);  
}


//pieces
function BlackRook(X_Coordinate,Y_Coordinate){ 
    // bottom
    for(var i=X_Coordinate , j=Y_Coordinate-1; j>0; j--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    // top
    for(var i=X_Coordinate , j=Y_Coordinate+1; j<9; j++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    // right
    for(var i=X_Coordinate+1 , j=Y_Coordinate; i<9; i++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        console.log(i,j)
        
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)==1){
            break;
        }
    }
    // left
    for(var i=X_Coordinate-1 , j=Y_Coordinate; i>0; i--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
}

function WhiteRook(X_Coordinate,Y_Coordinate){
    // bootom
    for(var i=X_Coordinate , j=Y_Coordinate-1; j>0; j--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    // top
    for(var i=X_Coordinate , j=Y_Coordinate+1; j<9; j++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    // right
    for(var i=X_Coordinate+1 , j=Y_Coordinate; i<9; i++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    // left
    for(var i=X_Coordinate-1 , j=Y_Coordinate; i>0; i--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
}

function BlackBishop(X_Coordinate,Y_Coordinate){
     //botton right
     for(var i=X_Coordinate+1,j=Y_Coordinate-1; i<9; i++,j--){
        if(i==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
        break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //botton left
    for(var i=X_Coordinate-1,j=Y_Coordinate-1; i<9; i--,j--){
        if(i==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
        break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //top right
    for(var i=X_Coordinate+1,j=Y_Coordinate+1; i<9; i++,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
        break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //top left
    for(var i=X_Coordinate-1,j=Y_Coordinate+1; i<9; i--,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
}

function WhiteBishop(X_Coordinate,Y_Coordinate){
    //botton right
    for(var i=X_Coordinate+1,j=Y_Coordinate-1; i<9; i++,j--){
        if(i==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_Black_Pieces(i,j)){
            break;
            Make_Red(i,j)
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
    }
    //botton left
    for(var i=X_Coordinate-1,j=Y_Coordinate-1; i<9; i--,j--){
        if(j==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_Black_Pieces(i,j)){
            break;
            Make_Red(i,j)
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
    }
    //top right
    for(var i=X_Coordinate+1,j=Y_Coordinate+1; i<9; i++,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_Black_Pieces(i,j)){
            break;
            Make_Red(i,j)
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
    }
    //top left
    for(var i=X_Coordinate-1,j=Y_Coordinate+1; i<9; i--,j++){
        if(i==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_Black_Pieces(i,j)){
            break;
            Make_Red(i,j)
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
    }
}

function BlackQueen(X_Coordinate,Y_Coordinate){
    // botton 5
    for(var i=X_Coordinate , j=Y_Coordinate-1; j>0; j--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    // top 1
    for(var i=X_Coordinate , j=Y_Coordinate+1; j<9; j++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    // right 3
    for(var i=X_Coordinate+1 , j=Y_Coordinate; i<9; i++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }

        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)==1){
            break;
        }
    }
    // left 7
    for(var i=X_Coordinate-1 , j=Y_Coordinate; i>0; i--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //botton right 4
    for(var i=X_Coordinate+1,j=Y_Coordinate-1; i<9; i++,j--){
        if(i==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //botton left 6
    for(var i=X_Coordinate-1,j=Y_Coordinate-1; i<9; i--,j--){
        if(i==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //top right 2
    for(var i=X_Coordinate+1,j=Y_Coordinate+1; i<9; i++,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
    //top left 8
    for(var i=X_Coordinate-1,j=Y_Coordinate+1; i<9; i--,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
        if(Is_Black_Pieces(i,j)){
            break;
        }
    }
}
function WhiteQueen(X_Coordinate,Y_Coordinate){
    // botton 5
    for(var i=X_Coordinate , j=Y_Coordinate-1; j>0; j--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    // top 1
    for(var i=X_Coordinate , j=Y_Coordinate+1; j<9; j++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    // right 3
    for(var i=X_Coordinate+1 , j=Y_Coordinate; i<9; i++){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }       
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    // left 7
    for(var i=X_Coordinate-1 , j=Y_Coordinate; i>0; i--){
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    //botton right 4
    for(var i=X_Coordinate+1,j=Y_Coordinate-1; i<9; i++,j--){
        if(j==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    //botton left 6
    for(var i=X_Coordinate-1,j=Y_Coordinate-1; i<9; i--,j--){
        if(j==0) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    //top right 2
    for(var i=X_Coordinate+1,j=Y_Coordinate+1; i<9; i++,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }   
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
    //top left 8
    for(var i=X_Coordinate-1,j=Y_Coordinate+1; i<9; i--,j++){
        if(j==9) break;
        if(Is_Empty(i,j)==0){
            Make_Coral(i,j);
        }
        if(Is_White_Pieces(i,j)){
            break;
        }
        if(Is_Black_Pieces(i,j)){
            Make_Red(i,j)
            break;
        }
    }
}
function BlackKing(X_Coordinate,Y_Coordinate){
    //top
    if(Is_Empty(X_Coordinate,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate,Y_Coordinate+1);
    }
    if(Y_Coordinate+1<=8){
        if(Is_White_Pieces(X_Coordinate,Y_Coordinate+1)){
            Make_Red(X_Coordinate,Y_Coordinate+1);
        }
    }
    //topleft
    if(Is_Empty(X_Coordinate-1,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate+1);
    }
    if(X_Coordinate-1>=1,Y_Coordinate+1<=8){
        if(Is_White_Pieces(X_Coordinate-1,Y_Coordinate+1)){
            Make_Red(X_Coordinate-1,Y_Coordinate+1);
        }
    }
    //topright
    if(Is_Empty(X_Coordinate+1,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate+1);
    }
    if(X_Coordinate+1<=8,Y_Coordinate+1<=8){
        if(Is_White_Pieces(X_Coordinate+1,Y_Coordinate+1)){
            Make_Red(X_Coordinate+1,Y_Coordinate+1);
        }
    }
    //bottom
    if(Is_Empty(X_Coordinate,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate,Y_Coordinate-1);
    }
    if(Y_Coordinate-1>=1){
        if(Is_White_Pieces(X_Coordinate,Y_Coordinate-1)){
            Make_Red(X_Coordinate,Y_Coordinate-1);
        }
    }
    //bottomleft
    if(Is_Empty(X_Coordinate-1,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate-1);
    }
    if(X_Coordinate-1>=1,Y_Coordinate-1>=1){
        if(Is_White_Pieces(X_Coordinate-1,Y_Coordinate-1)){
            Make_Red(X_Coordinate-1,Y_Coordinate-1);
        }
    }
    //bottompright
    if(Is_Empty(X_Coordinate+1,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate-1);
    }
    if(X_Coordinate+1<=8,Y_Coordinate-1>=1){
        if(Is_White_Pieces(X_Coordinate+1,Y_Coordinate-1)){
            Make_Red(X_Coordinate+1,Y_Coordinate-1);
        }
    }
    //right
    if(Is_Empty(X_Coordinate+1,Y_Coordinate)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate);
    }
    if(X_Coordinate+1<=8){
        if(Is_White_Pieces(X_Coordinate+1,Y_Coordinate)){
            Make_Red(X_Coordinate+1,Y_Coordinate);
        }
    }
    //left
    if(Is_Empty(X_Coordinate-1,Y_Coordinate)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate);
    }
    if(X_Coordinate-1>=1){
        if(Is_White_Pieces(X_Coordinate-1,Y_Coordinate)){
            Make_Red(X_Coordinate-1,Y_Coordinate);
        }
    }
}
function WhiteKing(X_Coordinate,Y_Coordinate){
    //top
    if(Is_Empty(X_Coordinate,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate,Y_Coordinate+1);
    }
    if(Y_Coordinate+1<=8){
        if(Is_Black_Pieces(X_Coordinate,Y_Coordinate+1)){
            Make_Red(X_Coordinate,Y_Coordinate+1);
        }
    }
    //topleft
    if(Is_Empty(X_Coordinate-1,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate+1);
    }
    if(X_Coordinate-1>=1,Y_Coordinate+1<=8){
        if(Is_Black_Pieces(X_Coordinate-1,Y_Coordinate+1)){
            Make_Red(X_Coordinate-1,Y_Coordinate+1);
        }
    }
    //topright
    if(Is_Empty(X_Coordinate+1,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate+1);
    }
    if(X_Coordinate+1<=8,Y_Coordinate+1<=8){
        if(Is_Black_Pieces(X_Coordinate+1,Y_Coordinate+1)){
            Make_Red(X_Coordinate+1,Y_Coordinate+1);
        }
    }
    //bottom
    if(Is_Empty(X_Coordinate,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate,Y_Coordinate-1);
    }
    if(Y_Coordinate-1>=1){
        if(Is_Black_Pieces(X_Coordinate,Y_Coordinate-1)){
            Make_Red(X_Coordinate,Y_Coordinate-1);
        }
    }
    //bottomleft
    if(Is_Empty(X_Coordinate-1,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate-1);
    }
    if(X_Coordinate-1>=1,Y_Coordinate-1>=1){
        if(Is_Black_Pieces(X_Coordinate-1,Y_Coordinate-1)){
            Make_Red(X_Coordinate-1,Y_Coordinate-1);
        }
    }
    //bottompright
    if(Is_Empty(X_Coordinate+1,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate-1);
    }
    if(X_Coordinate+1<=8,Y_Coordinate-1>=1){
        if(Is_Black_Pieces(X_Coordinate+1,Y_Coordinate-1)){
            Make_Red(X_Coordinate+1,Y_Coordinate-1);
        }
    }
    //right
    if(Is_Empty(X_Coordinate+1,Y_Coordinate)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate);
    }
    if(X_Coordinate+1<=8){
        if(Is_Black_Pieces(X_Coordinate+1,Y_Coordinate)){
            Make_Red(X_Coordinate+1,Y_Coordinate);
        }
    }
    //left
    if(Is_Empty(X_Coordinate-1,Y_Coordinate)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate);
    }
    if(X_Coordinate-1>=1){
        if(Is_Black_Pieces(X_Coordinate-1,Y_Coordinate)){
            Make_Red(X_Coordinate-1,Y_Coordinate);
        }
    }
}
function BlackPawn(X_Coordinate,Y_Coordinate){
    if(Is_Empty(X_Coordinate,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate,Y_Coordinate-1);
    }
    if(Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_White_Pieces(X_Coordinate+1,Y_Coordinate-1)){
            Make_Red(X_Coordinate+1,Y_Coordinate-1); 
        }
        if(Is_White_Pieces(X_Coordinate-1,Y_Coordinate-1)){
            Make_Red(X_Coordinate-1,Y_Coordinate-1); 
        }
    }
    if(Y_Coordinate==7 && Is_Empty(X_Coordinate,Y_Coordinate-2)==0){
        Make_Coral(X_Coordinate,Y_Coordinate-2);
    }
}
function WhitePawn(X_Coordinate,Y_Coordinate){
    if(Is_Empty(X_Coordinate,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate,Y_Coordinate+1);
    }
    if(Y_Coordinate<8 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_Black_Pieces(X_Coordinate+1,Y_Coordinate+1)){
            Make_Red(X_Coordinate+1,Y_Coordinate+1); 
        }
        if(Is_Black_Pieces(X_Coordinate-1,Y_Coordinate+1)){
            Make_Red(X_Coordinate-1,Y_Coordinate+1); 
        }
    }
    if(Y_Coordinate==2 && Is_Empty(X_Coordinate,Y_Coordinate+2)==0){
        Make_Coral(X_Coordinate,Y_Coordinate+2);
    }
}
function BlackKnight(X_Coordinate,Y_Coordinate){
    //top right 1
    if(Is_Empty(X_Coordinate+1,Y_Coordinate+2)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate+2);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_White_Pieces(X_Coordinate+1,Y_Coordinate+2)){
            Make_Red(X_Coordinate+1,Y_Coordinate+2); 
        }
    }
    //top right 2
    if(Is_Empty(X_Coordinate+2,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate+2,Y_Coordinate+1);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_White_Pieces(X_Coordinate+2,Y_Coordinate+1)){
            Make_Red(X_Coordinate+2,Y_Coordinate+1); 
        }
    }
    //botton right 1
    if(Is_Empty(X_Coordinate+2,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate+2,Y_Coordinate-1);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_White_Pieces(X_Coordinate+2,Y_Coordinate-1)){
            Make_Red(X_Coordinate+2,Y_Coordinate-1); 
        }
    }
    //botton right 2
    if(Is_Empty(X_Coordinate+1,Y_Coordinate-2)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate-2);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_White_Pieces(X_Coordinate+1,Y_Coordinate-2)){
            Make_Red(X_Coordinate+1,Y_Coordinate-2); 
        }
    }
    //top left 1
    if(Is_Empty(X_Coordinate-1,Y_Coordinate+2)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate+2);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_White_Pieces(X_Coordinate-1,Y_Coordinate+2)){
            Make_Red(X_Coordinate-1,Y_Coordinate+2); 
        }
    }
    //top left 2
    if(Is_Empty(X_Coordinate-2,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate-2,Y_Coordinate+1);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_White_Pieces(X_Coordinate-2,Y_Coordinate+1)){
            Make_Red(X_Coordinate-2,Y_Coordinate+1); 
        }
    }
    //botton left 1
    if(Is_Empty(X_Coordinate-2,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate-2,Y_Coordinate-1);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_White_Pieces(X_Coordinate-2,Y_Coordinate-1)){
            Make_Red(X_Coordinate-2,Y_Coordinate-1); 
        }
    }
    //botton left 2
    if(Is_Empty(X_Coordinate-1,Y_Coordinate-2)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate-2);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_White_Pieces(X_Coordinate-1,Y_Coordinate-2)){
            Make_Red(X_Coordinate-1,Y_Coordinate-2); 
        }
    }
}
function WhiteKnight(X_Coordinate,Y_Coordinate){
    //top right 1
    if(Is_Empty(X_Coordinate+1,Y_Coordinate+2)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate+2);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_Black_Pieces(X_Coordinate+1,Y_Coordinate+2)){
            Make_Red(X_Coordinate+1,Y_Coordinate+2); 
        }
    }
    //top right 2
    if(Is_Empty(X_Coordinate+2,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate+2,Y_Coordinate+1);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_Black_Pieces(X_Coordinate+2,Y_Coordinate+1)){
            Make_Red(X_Coordinate+2,Y_Coordinate+1); 
        }
    }
    //botton right 1
    if(Is_Empty(X_Coordinate+2,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate+2,Y_Coordinate-1);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_Black_Pieces(X_Coordinate+2,Y_Coordinate-1)){
            Make_Red(X_Coordinate+2,Y_Coordinate-1); 
        }
    }
    //botton right 2
    if(Is_Empty(X_Coordinate+1,Y_Coordinate-2)==0){
        Make_Coral(X_Coordinate+1,Y_Coordinate-2);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_Black_Pieces(X_Coordinate+1,Y_Coordinate-2)){
            Make_Red(X_Coordinate+1,Y_Coordinate-2); 
        }
    }
    //top left 1
    if(Is_Empty(X_Coordinate-1,Y_Coordinate+2)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate+2);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_Black_Pieces(X_Coordinate-1,Y_Coordinate+2)){
            Make_Red(X_Coordinate-1,Y_Coordinate+2); 
        }
    }
    //top left 2
    if(Is_Empty(X_Coordinate-2,Y_Coordinate+1)==0){
        Make_Coral(X_Coordinate-2,Y_Coordinate+1);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_Black_Pieces(X_Coordinate-2,Y_Coordinate+1)){
            Make_Red(X_Coordinate-2,Y_Coordinate+1); 
        }
    }
    //botton left 1
    if(Is_Empty(X_Coordinate-2,Y_Coordinate-1)==0){
        Make_Coral(X_Coordinate-2,Y_Coordinate-1);
    }
    if(Y_Coordinate<7 && Y_Coordinate>2 && X_Coordinate>2 && X_Coordinate<7){
        if(Is_Black_Pieces(X_Coordinate-2,Y_Coordinate-1)){
            Make_Red(X_Coordinate-2,Y_Coordinate-1); 
        }
    }
    //botton left 2
    if(Is_Empty(X_Coordinate-1,Y_Coordinate-2)==0){
        Make_Coral(X_Coordinate-1,Y_Coordinate-2);
    }
    if(Y_Coordinate<8 && Y_Coordinate>1 && X_Coordinate>1 && X_Coordinate<8){
        if(Is_Black_Pieces(X_Coordinate-1,Y_Coordinate-2)){
            Make_Red(X_Coordinate-1,Y_Coordinate-2); 
        }
    }
}