<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
$data = json_decode(file_get_contents("php://input"));
 
include "db.php";
$sql = "";
switch ($data->what) {

    //news(id, tieuDe, tomTat, hinhAnh, noiDung, ngayDang, luotXem, tuKhoa)
    // select news 
    case 10: {
        $sql = "SELECT `id`, `tieuDe`, `tomTat`, `hinhAnh`, `noiDung`,
         `ngayDang`, `luotXem`, `tuKhoa` FROM `news` WHERE 1";
        break;
    }

    // insert news 
    case 11: {
        // save image to to assets/uploads  
        $img = $data->hinhAnh->value;  
        // getAllWhatUrl = "http://localhost:8081/new/project/app_piano_new/api/selectAllByWhat.php";
        // getAllWhatUrl = "https://phonglegithubio.000webhostapp.com/api/selectAllByWhat.php";
        $newNameFile = date("Y-m-d") ."_". date("h-i-s") . $data->hinhAnh->filename; 
        // phuong le
        // path save to database
        // $pathLocal = "http://localhost:8081/new/project/app_piano_new/api/uploads/" . $newNameFile;

        // phong le
        $pathLocal = "http://salempiano.vn/api/uploads/" . $newNameFile;
       
        // path save to asset on web
        $path = "uploads/" . $newNameFile;
 
        $folderPath = $path;  
        $img = str_replace('data:image/png;base64,', '', $img);
        $img = str_replace(' ', '+', $img);
        $dataImg = base64_decode($img); 
        file_put_contents($folderPath, $dataImg); 

        $sql = "INSERT INTO `news`
        (`tieuDe`, `tomTat`, `hinhAnh`, `noiDung`, `ngayDang`, `luotXem`, `tuKhoa`) 
        VALUES ('$data->tieuDe','$data->tomTat','$pathLocal',
        '$data->noiDung','$data->ngayDang','$data->luotXem','$data->tuKhoa')"; 
        break;
    }

    // update news 
    case 12: {

         // save image to to assets/uploads  
         $img = $data->hinhAnh->value;  
         if($img!=""){
            // getAllWhatUrl = "http://localhost:8081/new/project/app_piano_new/api/selectAllByWhat.php";
            // getAllWhatUrl = "https://phonglegithubio.000webhostapp.com/api/selectAllByWhat.php";
            $newNameFile = date("Y-m-d") ."_". date("h-i-s") . $data->hinhAnh->filename; 
            // phuong le
            // path save to database
            // $pathLocal = "http://localhost:8081/new/project/app_piano_new/api/uploads/" . $newNameFile;
    
            // phong le
            $pathLocal = "http://salempiano.vn/api/uploads/" . $newNameFile;
            
            // path save to asset on web
            $path = "uploads/" . $newNameFile;
    
            $folderPath = $path;  
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $dataImg = base64_decode($img); 
            file_put_contents($folderPath, $dataImg);

            $sql = "UPDATE `news` 
            SET 
                `tieuDe`='$data->tieuDe',`tomTat`='$data->tomTat', `hinhAnh`='$pathLocal',
                `noiDung`='$data->noiDung',`ngayDang`='$data->ngayDang',
                `luotXem`='$data->luotXem',`tuKhoa`='$data->tuKhoa' 
            WHERE `id`=$data->id";
         }else{
            $sql = "UPDATE `news` 
            SET 
                `tieuDe`='$data->tieuDe',`tomTat`='$data->tomTat',
                `noiDung`='$data->noiDung',`ngayDang`='$data->ngayDang',
                `luotXem`='$data->luotXem',`tuKhoa`='$data->tuKhoa' 
            WHERE `id`=$data->id";
         }
        
        break;
    }
    
    // delete news 
    case 13: {
        $sql = "DELETE FROM `news` WHERE `id`=$data->id";
        break;
    }

    // get news by id
    case 14: {
        $sql = "SELECT * FROM `news` WHERE `id`=$data->id";
        break;
    }

    // lấy tin mới
    case 15: {
        $sql = "SELECT * FROM news ORDER BY id DESC LIMIT 0,5 ";
        break;
    }

      // lấy tin mới
      case 16: {
        $sql = "SELECT * FROM news ORDER BY id DESC LIMIT 5,5 ";
        break;
    }

      // lấy tin mới
      case 17: {
        $sql = "SELECT * FROM news ORDER BY id DESC LIMIT 8,3 ";
        break;
    }
    
    // lấy tin mới
    case 18: {
        $sql = "SELECT * FROM news ORDER BY id DESC LIMIT 5,5 ";
        break;
    }



    //piano(id, maSP, tenSP, gia, hinhAnh, tomTat, moTaSP, thongSoKT, luotXem, ngayDang, tuKhoa)
    // select piano 
    case 20: {
        $sql = "SELECT `id`, `maSP`, `tenSP`, `gia`, `hinhAnh`, `tomTat`, `moTaSP`,
         `thongSoKT`, `luotXem`, `ngayDang`, `tuKhoa` FROM `piano` WHERE 1";
        break;
    }

    // insert piano 
    case 21: {

         // save image to to assets/uploads  
         $img = $data->hinhAnh->value;  
         // getAllWhatUrl = "http://localhost:8081/new/project/app_piano_new/api/selectAllByWhat.php";
         // getAllWhatUrl = "https://phonglegithubio.000webhostapp.com/api/selectAllByWhat.php";
         $newNameFile = date("Y-m-d") ."_". date("h-i-s") . $data->hinhAnh->filename; 
         // phuong le
         // path save to database
         // $pathLocal = "http://localhost:8081/new/project/app_piano_new/api/uploads/" . $newNameFile;
 
         // phong le
         $pathLocal = "http://salempiano.vnapi/uploads/" . $newNameFile;
        
         // path save to asset on web
         $path = "uploads/" . $newNameFile;
  
         $folderPath = $path;  
         $img = str_replace('data:image/png;base64,', '', $img);
         $img = str_replace(' ', '+', $img);
         $dataImg = base64_decode($img); 
         file_put_contents($folderPath, $dataImg); 


        $sql = "INSERT INTO `piano`( `maSP`, `tenSP`, `gia`, `hinhAnh`, `tomTat`, `moTaSP`, `thongSoKT`, `luotXem`, `ngayDang`, `tuKhoa`) 
        VALUES ('$data->maSP','$data->tenSP','$data->gia','$pathLocal','$data->tomTat','$data->moTaSP','$data->thongSoKT',
        '$data->luotXem','$data->ngayDang','$data->tuKhoa')";
        break;
    }

    // update piano 
    case 22: {
        
         // save image to to assets/uploads  
         $img = $data->hinhAnh->value;  
         if($img!=""){
           
            // getAllWhatUrl = "http://localhost:8081/new/project/app_piano_new/api/selectAllByWhat.php";
            // getAllWhatUrl = "https://phonglegithubio.000webhostapp.com/api/selectAllByWhat.php";
            $newNameFile = date("Y-m-d") ."_". date("h-i-s") . $data->hinhAnh->filename; 
            // phuong le
            // path save to database
            // $pathLocal = "http://localhost:8081/new/project/app_piano_new/api/uploads/" . $newNameFile;
    
            // phong le
            $pathLocal = "http://salempiano.vn/api/uploads/" . $newNameFile;
            
            // path save to asset on web
            $path = "uploads/" . $newNameFile;
    
            $folderPath = $path;  
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $dataImg = base64_decode($img); 
            file_put_contents($folderPath, $dataImg); 

            
            $sql = "UPDATE `piano` SET `maSP`='$data->maSP',`tenSP`='$data->tenSP',`gia`='$data->gia',`hinhAnh`='$pathLocal',
            `tomTat`='$data->tomTat',`moTaSP`='$data->moTaSP',`thongSoKT`='$data->thongSoKT',`luotXem`='$data->luotXem',
            `ngayDang`='$data->ngayDang',`tuKhoa`='$data->tuKhoa' 
            WHERE `id`=$data->id";

         }else{
             
            $sql = "UPDATE `piano` SET `maSP`='$data->maSP',`tenSP`='$data->tenSP',`gia`='$data->gia',
            `tomTat`='$data->tomTat',`moTaSP`='$data->moTaSP',`thongSoKT`='$data->thongSoKT',`luotXem`='$data->luotXem',
            `ngayDang`='$data->ngayDang',`tuKhoa`='$data->tuKhoa' 
            WHERE `id`=$data->id";
             
         }


        break;
    }
    
    // delete piano 
    case 23: {
        $sql = "DELETE FROM `piano` WHERE `id`=$data->id";
        break;
    }

      // get piano by id
      case 24: {
        $sql = "SELECT * FROM `piano` WHERE `id`=$data->id";
        break;
    }

    // lấy piano mới
    case 25: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 0,1 ";
        break;
    }

     // lấy piano mới
     case 26: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 1,2 ";
        break;
    }
    // lấy piano mới
    case 266: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 7,3 ";
        break;
    }

     // lấy piano mới
     case 27: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 2,1 ";
        break;
    }
    
     // lấy piano mới
     case 28: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 3,2 ";
        break;
    }
     // lấy piano mới
     case 29: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 5,3 ";
        break;
    }
       // lấy piano mới
       case 299: {
        $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 8,3 ";
        break;
    }

    // lấy piano mới
    case 2999: {
    $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 0,3 ";
    break;
    }

    // lấy piano mới
    case 29999: {
    $sql = "SELECT * FROM piano ORDER BY id DESC LIMIT 4,3 ";
    break;
    }

     // lấy piano gia nho hon 20 trieu
     case 30: {
        $sql = "SELECT * FROM piano WHERE gia < 20";
        break;
    }

      // lấy piano gia nho hon 50 trieu
      case 31: {
        $sql = "SELECT * FROM piano WHERE gia < 50 and gia > 20";
        break;
    }

      // lấy piano gia nho hon 20 trieu
      case 32: {
        $sql = "SELECT * FROM piano WHERE gia < 100 and gia > 50";
        break;
    }

      // lấy piano gia nho hon 20 trieu
      case 33: {
        $sql = "SELECT * FROM piano WHERE  gia < 300 and gia > 100";
        break;
    }

     // lấy piano like '%K%'
     case 34: {
        $sql = "SELECT * FROM `piano` WHERE tenSP LIKE '%Kawai%'";
        break;
    }

    // lấy piano like' %c%'
    case 35: {
        $sql = "SELECT * FROM `piano` WHERE tenSP LIKE '%Casio%'";
        break;
    }

    
    // lấy piano like' %r%'
    case 36: {
        $sql = "SELECT * FROM `piano` WHERE tenSP LIKE '%ROLANDr%'";
        break;
    }

       
    // lấy piano like' %e%'
    case 37: {
        $sql = "SELECT * FROM `piano` WHERE tenSP LIKE '%ESSEX%'";
        break;
    }

    // lấy piano like' %e%'
    case 38: {
        $sql = "SELECT * FROM `piano` WHERE tenSP LIKE '%$data->tenSP%'";
        // echo $sql;
        break;
    }

 
 
    
    // lấy video
    case 40: {
        $sql = "SELECT * FROM `video` WHERE 1";
        break;
    }

    // them video
    case 41: {
        $sql = "INSERT INTO `video`(`tenVideo`, `urlVideo`, `tuKhoa`) VALUES ('$data->tenVideo','$data->urlVideo','$data->tuKhoa')";
        break;
    }
    
    // sua video
    case 42: {
        $sql = "UPDATE video SET tenVideo='$data->tenVideo',urlVideo='$data->urlVideo',tuKhoa='$data->tuKhoa' WHERE id='$data->id'";
        // echo $sql;
        break;
    }
    
    // xoa video
    case 43: {
        $sql = "DELETE FROM video WHERE id ='$data->id'";
        // echo $sql;
        break;
    }

    // lấy video by id
    case 44: {
        $sql = "SELECT * FROM `video` WHERE id = '$data->id'";
        break;
    }

     // lấy video mới
     case 45: {
        $sql = "SELECT * FROM video ORDER BY id DESC LIMIT 0,2 ";
        break;
    }

      // lấy video mới
      case 46: {
        $sql = "SELECT * FROM video ORDER BY id DESC LIMIT 2,2 ";
        break;
    }

      // lấy video mới
      case 47: {
        $sql = "SELECT * FROM video ORDER BY id DESC LIMIT 4,2 ";
        break;
    }

    
   
}

//excute sql
$result = $conn->query($sql);

// echo $sql."<br>";
// echo json_encode($result);
if (isset($result->num_rows) && ($result->num_rows > 0)) {
    // output data of each row 
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data); 
} else {
    // echo json_encode($result);
    echo "null";
}
$conn->close(); 

?> 


<?php

    // /**
    //  * save file from your computer
    //  */
    // public function saveImageFromLocal($img, $path)
    // {  
    //     $folderPath = $path;  
    //     $img = str_replace('data:image/png;base64,', '', $img);
    //     $img = str_replace(' ', '+', $img);
    //     $data = base64_decode($img); 
    //     file_put_contents($folderPath, $data);  
    // }

    // /**
    //  * save file from link
    //  */
    // public function saveImageFromLink($link, $path)
    // {  
    //     $folderPath = $path;
    //     file_put_contents($folderPath, $link);
    // }
?>