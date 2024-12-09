package edu.du.teampro.controller;

import org.springframework.stereotype.Controller;
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
}
