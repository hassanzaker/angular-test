import { Injectable } from '@angular/core';
import Ogma from '../../assets/ogma.min.js';


@Injectable({
  providedIn: 'root'
})
export class GraphMakerService {

  constructor(private ogma = Ogma) { }

  public expandNode(nodeId){
    //read json file from back
    let nodes = [
      {id: '5', isIncomming: true, attributes: {x: 0, y: 0, color: 'green'}},
      {id: '6', isIncomming: true, attributes: {x: 60, y: 20, color: 'magenta'}},
      {id: '7', isIncomming: false, attributes: {x: 30, y: -30, color: 'orange'}}
    ];
    let edges = [];
    nodes.forEach(node => {
      edges.push(this.CreateEdge(nodeId, node))
    });

    this.addNodes(nodes);
    this.addEdges(edges);
  }

  private addEdges(edges){
    this.ogma.addEdges(edges);
  }

  private CreateEdge(nodeId, node){
    let edge = {id: undefined, source:undefined, target:undefined};
    if(node.isIncomming === true){
      edge.source = node.id;
      edge.target = nodeId;
    }else{
      edge.source = nodeId;
      edge.target = node.id;
    }
    edge.id = edge.source + "-" + edge.target + new Date().getMilliseconds;

    return edge;

  }

  private addNodes(nodes){
    this.ogma.addNodes(nodes);
  }
}
