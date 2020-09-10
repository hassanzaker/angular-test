import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-radial-menu',
  templateUrl: './radial-menu.component.html',
  styleUrls: ['./radial-menu.component.scss']
})
export class RadialMenuComponent implements OnInit {
  public nodeId;
  constructor() {
  }

  ngOnInit(): void {

  }


  public expand(node, x, y) {
    this.nodeId = node.getId();
    let menu = document.getElementById('menu');
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;

    menu.style.transform = "scale(2)";
  }

  public close() {
    let menu = document.getElementById('menu');
    menu.style.transform = "scale(0)";
  }



}
