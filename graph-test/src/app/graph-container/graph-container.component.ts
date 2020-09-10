import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import Ogma from '../../assets/ogma.min.js';
import { RadialMenuComponent } from './radial-menu/radial-menu.component';
import { GraphMakerService } from './graph-maker.service';



@Component({
  selector: 'app-graph-container',
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss']
})
export class GraphContainerComponent implements OnInit {
  public radialComponent: RadialMenuComponent = new RadialMenuComponent();
  public height;
  public width;
  public zoom;

  private service : GraphMakerService;


  constructor() {
  }

  ngOnInit(): void {
    let ogma = new Ogma({
      container: 'graph-container'
    });

    
    this.width = Number(ogma.view.get().width);
    this.height = Number(ogma.view.get().height);

    var node = ogma.addNode({ id: 2, attributes: { x: 0, y: 0, color: 'green', text: { content: 'Yet another node' } } });


    this.service = new GraphMakerService(ogma);

    this.setOnClickListener(ogma);
  }


  public setOnClickListener(ogma) {
    ogma.events.onClick((evt) => {
      let target = evt.target;
      if (evt.button === 'left' && target && target.isNode) {
        this.service.expandNode(target.getId());
        // this.radialComponent.close();
        // this.radialComponent.expand(target, this.findGlobalCoorinate(target.getAttribute('x'), this.width, ogma.view.getZoom()),
        // this.findGlobalCoorinate(target.getAttribute('y'), this.width, ogma.view.getZoom()));
      }
      else {
        this.radialComponent.close();
      }
    });
  }

  private findGlobalCoorinate(x, length, zoom){
    return ((Number(x) - (length / 2)) / +zoom);
  }






  public addNode(ogma) {
    let n0 = { id: 'n0' };
    // Add the node to ogma.
    ogma.addNode(n0);

    // Create a node with id 'n1'.
    let n1 = { id: 'n1' };
    // Add the node to ogma.
    ogma.addNode(n1);
  }

  public addEdge(ogma) {
    var e = {
      id: 'e0',
      source: 'n0',
      target: 'n1',
      attributes: {
        shape: 'arrow'
      }
    };
    // Add the edge to ogma.
    ogma.addEdge(e);
  }

}
