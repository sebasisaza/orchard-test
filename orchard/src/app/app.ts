import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'orchard';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a');
      if (anchor) {
        console.log('Anchor clicked:', anchor);
      }
    });
  }
}
