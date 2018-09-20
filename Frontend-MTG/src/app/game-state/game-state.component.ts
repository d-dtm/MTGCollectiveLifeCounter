import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.css']
})
export class GameStateComponent implements OnInit {
  public players: Player[] = [];
  public currentPlayer = this.dataService.getCurrentPlayer();
  public currentStat = Stats.Life;
  constructor(private gameService: GameService, private playerService: PlayerService, private dataService: DataService) { }

  ngOnInit() {
    this.refresh();
  }
  switchTo(stat: Stats) {
    this.currentStat = stat;
  }
  addStat(amount) {
    if (this.currentStat === Stats.Life) {
      this.currentPlayer.life += amount;
    } else if (this.currentStat === Stats.Poison) {
      this.currentPlayer.poison += amount;
    } else if (this.currentStat === Stats.Experience) {
      this.currentPlayer.experience += amount;
    }
    this.playerService.updateLifeStats(this.dataService.getGame().gameId, this.currentPlayer).subscribe(
      result => {
      },
      err => {
      }
    );
  }
  refresh() {
    this.gameService.getPlayers(this.dataService.getGame()).subscribe(
      result => {
        this.adjustArrays(result);
      },
      err => {
        console.log(err);
      }
    );
  }
  adjustArrays(data: Player[]) {
    this.players = [];
    for (let i = 0; i < data.length; i++) {
      if (this.currentPlayer.email !== data[i].email) {
        this.players.push(data[i]);
      } else {
        this.currentPlayer = data[i];
      }
    }
  }
}
enum Stats {
    Life = 0, Poison = 1, Experience = 2
}
