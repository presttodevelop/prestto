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
        <title>Presitify Dashboard</title>
        <link href="dist/css/styles.css" rel="stylesheet" />
        <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="index.php"><img src="../dist/assets/img/logo.png" class="logoPresty"/> Dashboard</a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button
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
                            <a class="nav-link" href="metricas.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Metricas</a
                            ><a class="nav-link" href="registros.php"
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
                        <h1 class="mt-4">Dashboard</h1>
                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">Créditos aprobados</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">540</a>
                                        <div class="small text-white"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-warning text-white mb-4">
                                    <div class="card-body">Créditos rechazados</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">Ver</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-success text-white mb-4">
                                    <div class="card-body">Leads registrados</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">Ver</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>Registros</div>
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
                                                <th>CELULAR</th>
                                                <th>EMAIL</th>
                                                <th>ACEPTOTERMINOSSMS</th>
                                                <th>HISTORIAL</th>
                                                <th>CONOCIMIENTO</th>
                                                <th>GENERO</th>
                                                <th>CURP</th>
                                                <th>RFC</th>
                                                <th>CP</th>
                                                <th>ESTADO</th>
                                                <th>MUNICIPIO</th>
                                                <th>CIUDAD</th>
                                                <th>COLONIA</th>
                                                <th>CALLE</th>
                                                <th>NUM_EXT</th>
                                                <th>NUM_INT</th>
                                                <th>PARENTESCO</th>
                                                <th>REF_APPELIDO</th>
                                                <th>TEL_REFERENCIA</th>
                                                <th>NIVELESTUDIOS</th>
                                                <th>SALARIONETO</th>
                                                <th>OCUPACION</th>
                                                <th>DETALLEOCUPACION</th>
                                                <th>DEUDAS</th>
                                                <th>FRECUENCIAPAGO</th>
                                                <th>CLABE</th>
                                                <th>BANCOCLABE</th>
                                                <th>TITULARTARJETA</th>
                                                <th>FECHAVENCIMIENTO</th>
                                                <th>NUMEROTARJETA</th>
                                                <th>BANCOTARJETA</th>
                                                <th>MONTOSOLICITADO</th>
                                                <th>TIEMPODEPAGO</th>
                                                <th>TOTALDELPRESTAMO</th>
                                                <th>ACEPTOTERMINOS</th>
                                                <th>IMAGEN1</th>
                                                <th>IMAGEN2</th>
                                                <th>ACEPTOCONTRATO</th>
                                                <th>CONTRASENA</th>
                                                <th>IDCONTRATO</th>
                                                <th>CONTRATO</th>
                                                <th>TIMER</th>
                                                <th>IDSMS</th>
                                                <th>IDPAGO</th>
                                                <th>SUGERENCIA</th>
                                                <th>STATUS</th>
                                                <th>ACCION</th>
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

                                        $sql = "SELECT * FROM registrosprestamo";
                                        $result = $conn->query($sql);
                                        if ($result->num_rows > 0) {
                                            $id = $row["id"];
                                            // output data of each row
                                            while($row = $result->fetch_assoc()) {
                                                echo "<tr><td>".$row["id"]."</td><td>".
                                                $row["fecha"]."</td><td>".
                                                $row["nombre"]."</td><td>".
                                                $row["apellidopaterno"]."</td><td>".
                                                $row["apellidomaterno"]."</td><td>".
                                                $row["celular"]."</td><td>"
                                                .$row["email"].
                                                "</td><td>".$row["aceptoterminoscondicionescel"].
                                                "</td><td>".$row["historialcrediticio"]."</td><td>".$row["conocimientodelcliente"]."</td><td>".$row["genero"]."</td><td>".$row["curp"]."</td><td>".$row["rfc"]."</td><td>".
                                                $row["cp"]."</td><td>".$row["estado"]."</td><td>".$row["municipio"]."</td><td>".$row["ciudad"]."</td><td>".$row["colonia"]."</td><td>".$row["calle"]."</td><td>".
                                                $row["numeroexterior"]."</td><td>".$row["numerointerior"]."</td><td>".$row["parentesco"]."</td><td>".$row["referenciapellido"]."</td><td>".$row["telfijoreferencia"]."</td><td>".
                                                $row["nivelestudios"]."</td><td>".$row["salarioneto"]."</td><td>".$row["ocupacion"]."</td><td>".$row["detalleocupacion"]."</td><td>".$row["deudas"]."</td><td>".$row["frecuenciadepago"]."</td><td>".
                                                $row["clabe"]."</td><td>".$row["bancoclabe"]."</td><td>".$row["titulartarjeta"]."</td><td>".$row["fechadevencimiento"]."</td><td>".$row["numerotarjeta"]."</td><td>".$row["bancotarjeta"]."</td><td>".
                                                $row["dineroquenecesita"]."</td><td>".$row["fechadepagoen"]."</td><td>".$row["totalaprestar"]."</td><td>".$row["aceptoterminoscondicionescontrato"].
                                                "</td><td><a href='https://prestto.mx/api/uploads/".$row["pictures1"]."'"."target='blank'><img src='https://prestto.mx/api/uploads/".$row["pictures1"]."'"."width='200px' heigth='auto'></a>".
                                                "</td><td><a href='https://prestto.mx/api/uploads/".$row["pictures2"]."'"."target='blank'><img src='https://prestto.mx/api/uploads/".$row["pictures2"]."'"."width='200px' heigth='auto'></a></td><td>"
                                                .$row["aceptocontrato"]."</td><td>".$row["contrasena"]."</td><td>".$row["idcontrato"]."</td><td>".$row["contrato"]."</td><td>".$row["timer"]."</td><td>".$row["idSMS"]."</td><td>".$row["idpago"]."</td><td>".$row["idsugerencia"]."</td><td>".
                                                $row["statuscliente"]."</td><td><button onClick='approved($id)'>✔</button><button> x </button></td></tr>";
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
                            <div class="text-muted">Prestify &copy;</div>
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
        <script>
        async function approved(id) {
            e.preventDefault(); 
            console.log("id",id)
        }
  </script>
    </body>
</html>
