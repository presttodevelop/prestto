<?php
    include "dist/conf/config.php";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Prestto Payments</title>
        <link href="dist/css/styles.css" rel="stylesheet" />
        <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="application/javascript">  
        //orderTable
            $(document).ready(function() {
                $('#dataTable').DataTable( {
                    "order": [[ 2, "desc" ]]
                } );
            });


            function addfavourite(event) {
                console.log(event)
                $.post('functions.php?id=78&function=update&status=approve',{id:event,type:"updatepayment"},function(data)
                    {
                        console.log("successfully")
                        location.reload();
                    })
                    }
                    $(document).ready(function(){
                    $('#id').click(function(){
                    var id=$(this).val();
                    $.post('functions.php?id=17&function=update&status=approve',{id:event,type:"updatepayment"},function(data)

                    {
                        console.log("successfully")
                        location.reload();
                    })

                    });

            });
            function rejected(event) {
                $.post('functions.php?id=78&function=update&status=approve',{id:event,type:"rejectedpayment"},function(data)
                    {
                        console.log("successfully",data)
                    })
                    }
                    $(document).ready(function(){
                    $('#id').click(function(){
                    var id=$(this).val();
                    $.post('functions.php?id=17&function=update&status=approve',{id:event,type:"rejectedpayment"},function(data)

                    {
                        console.log("successfully")
                    })

                    });

            });
            </script>
    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="registros.php"><img src="../dashboard/dist/assets/img/logo.png" class="logoPresty"/></a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button
            ><!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">SECCIONES</div>
                            <a class="nav-link" href="registrosleads.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Registros Leads</a
                            >
                            <a class="nav-link" href="registros.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Registros</a
                            >
                            <a class="nav-link" href="Prospectos.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Prospectos</a
                            >
                            <a class="nav-link" href="contactoregistros.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Contacto Leads</a
                            >
                            <a class="nav-link" href="payments.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Pagos</a
                            >
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Bienvenido</div>
                            Usuario
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4"></h1>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>Pagos Banwire</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <form method='post' action='downloadcsv.php'>
                                        <input type='submit' value='Export' name='Export'>
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID </th>
                                                <th>FECHA</th>
                                                <th>NOMBRE</th>
                                                <th>APELLIDO PATERNO</th>
                                                <th>APELLIDO MATERNO</th>
                                                <th>EMAIL</th>
                                                <th>IDPAYMENT</th>
                                                <th>REFERENCE PAYMENT</th>
                                                <th>MONTO</th>
                                                <th>STATUS</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <?php 
                                        // Create connection
                                        $conn = new mysqli($servername, $username, $password, $dbname);
                                        // Check connection
                                        if ($conn->connect_error) {
                                            die("Connection failed: " . $conn->connect_error);
                                        }

                                        $sql = "SELECT * FROM payments";
                                        $result = $conn->query($sql);
                                        if ($result->num_rows > 0) {
                                            // output data of each row
                                            while($row = $result->fetch_assoc()) {
                                                $user= [$row["id"], $row["email"]];
                                                echo "<tr><td>".$row["id"]."</td><td>".
                                                $row["fecha"]."</td><td>".
                                                $row["nombre"]."</td><td>".
                                                $row["apellidopaterno"]."</td><td>".
                                                $row["apellidomaterno"]."</td><td>".
                                                $row["email"]."</td><td>".
                                                $row["idpayment"]."</td><td>".
                                                $row["referencepyament"]."</td><td>".
                                                $row["monto"]."</td><td>".
                                                $row["status"]."</td><td><a href='#' id='id' onClick='addfavourite(".$user.")'>✔</a></td>
                                                <td><a href='#' id='id' onClick='rejected(".$row["id"].")'>x</a></td>";
                                            }
                                        } else {
                                            echo "0 results";
                                        }
                                        $conn->close();
                                    ?>
                            
                                        </tbody>
                                    </table>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Prestto &copy;</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="ds/js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
        <script src="dist/assets/demo/chart-area-demo.js"></script>
        <script src="dist/assets/demo/chart-bar-demo.js"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
        <script src="dist/assets/demo/datatables-demo.js"></script>
    </body>
</html>
