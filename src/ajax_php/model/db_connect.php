<?php 

class PDOconnect{
    
    const HOST= CON_HOST;
    const DB= CON_DB;
    const USERNAME= CON_USERNAME;
    const PASSWORD= CON_PASSWORD;

    private function getConnection(){
        $username = self::USERNAME;
        $password = self::PASSWORD;
        $host = self::HOST;
        $db = self::DB;
        $connection = new PDO("mysql:dbname=$db;host=$host", $username, $password);
            return $connection;
        }
        public function queryList($sql, $args){
            $connection = $this->getConnection();
            $stmt = $connection->prepare($sql);
            $stmt->execute($args);
            return $stmt;
        }
    }

?>