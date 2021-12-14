import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.less'],
})
export class TicTacToeComponent implements OnInit, AfterViewInit {
  @ViewChild('tictactoe') tictactoe: ElementRef;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.elementRef.nativeElement
    //   .querySelector('game--container')
    // .addEventListener('click', this.onClick.bind(this));

    this.renderer2.listen(this.tictactoe.nativeElement, 'click', (event) => {
      console.log(event);
    });
  }

  onClick(event) {
    console.log(event);
  }
}
