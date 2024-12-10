package edu.du.teampro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index() {return "pages/login";}

    @GetMapping("/main")
    public String main() {return "pages/main";}

    @GetMapping("/am")
    public String step3() {return "pages/am";}



    @GetMapping("/step")
    public String step() {return "pages/step";}

    @GetMapping("/extest")
    public String extest() {return "pages/extest";}

    @GetMapping("/H1depth0101")
    public String H1depth0101() {return "pages/H1depth/depth0101";}

    @GetMapping("/H1depth0102")
    public String H1depth0102() {return "pages/H1depth/depth0102";}


    @GetMapping("/H2depth0101")
    public String H2depth0101() {return "pages/H2depth/depth0101";}

    @GetMapping("/H2depth0102")
    public String H2depth0102() {return "pages/H2depth/depth0102";}

    @GetMapping("/H2depth0103")
    public String H2depth0103() {return "pages/H2depth/depth0103";}

}
