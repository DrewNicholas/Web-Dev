# Assignment: Project 4
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.15.2015.01
# Purpose: Pig Dice game

use 5.14.1;
use warnings;

my (@die, @score, @counter, @totalScore);
my ($turnScore, $player, $rollAgain, $canContinue);

use constant HUMAN => 0;
use constant COMPUTER =>1;
use constant YES => 1;
use constant PLAYERS => 2;
use constant LOSE_SCORE => 1;

sub main {
     use constant WIN => 100;
     
     setTotalScore();
     setCounter();
     while ($totalScore[COMPUTER] < WIN && $totalScore[HUMAN] < WIN) {
          setPlayer();
          $rollAgain = YES;
          $turnScore = 0;
          while ($rollAgain == YES && ($totalScore[$player] + $turnScore) < WIN) {
                rollDie();
                setTurnScore();
                setCanContinue();
                setRollAgain();                
          }
          setScore();
          setTotalScore();
          setCounter();
          print "\n-------------------------------------------------------------------------------";
     }
     printWinner();
}

main();

sub rollDie {
     use constant NUMBER_OF_DIE => 2;
     use constant MAX_DIE => 6;
     
     print "\nRolling die...";
     for (my $i = 0; $i < NUMBER_OF_DIE; $i++) {
          $die[$i] = int(rand(MAX_DIE) + 1);
     }
     print "\nDie 1: $die[0]";
     print "\nDie 2: $die[1]";
}

sub setPlayer {
     if (defined $player) {
          if ($player == HUMAN) {
               $player = COMPUTER;
               print "\n\nPlayer is computer ";
          } else {
               $player = HUMAN;
               print "\n\nPlayer is human ";
          }
          print "with a current total score of $totalScore[$player]";
          sleep 1;
     } else {
          $player = HUMAN;
          print "Player is human";
     }
}

sub setRollAgain {
     use constant MAX_ROLL_AGAIN => 2;
     
     if (defined $rollAgain) {
          if ($canContinue != YES) {
               print "Your turn is over.\n";
               $rollAgain = 0;
          } else {
               $rollAgain = 2;
               if ($player == HUMAN) {
                    while ($rollAgain !~ /[0-9]/ || $rollAgain < 0 || $rollAgain > 1) {
                         print "\nWould you like to roll again(0=no, 1=yes)? ";
                         chomp ($rollAgain = <STDIN>);
                         if ($rollAgain !~ /[0-9]/ || $rollAgain < 0 || $rollAgain >1) {
                              say "Incorrect input. Please try again";
                              sleep 1;
                         }               
                    }
               } else {
                    $rollAgain = int(rand(MAX_ROLL_AGAIN));
                    print "\n";
               }
          }
     } else {
          $rollAgain = YES;
     }
}

sub setCanContinue {
     if ($turnScore != 0) {
          $canContinue = YES;
     } else {
          $canContinue = 0;
     }
}

sub setTurnScore {     
     if ($die[1] == LOSE_SCORE || $die[0] == LOSE_SCORE) {
          $turnScore = 0;
     } else {
          $turnScore = $turnScore + $die[0] + $die[1];
     }
     print "\nScore for this turn is $turnScore. ";
     sleep 1;
}

sub setScore {
     my $scoreSize = @score;
     if ($turnScore == 0 && $die[1] == $die[0]) {
          for (my $i = 0; $i < $scoreSize; $i++) {
                    $score[$i][$player] = 0;
          }
     } else {
          $score[$counter[$player]][$player] = $turnScore;
     }     
}

sub setCounter {
          my $counterSize = @counter;
          if ($counterSize != 0) {
               $counter[$player]++;
          } else {
               for (my $i = 0; $i < PLAYERS; $i++) {
                    $counter[$i] = 0;
               }
          }
          
}

sub setTotalScore {
     my $totalScoreSize = @totalScore;
     if ($totalScoreSize != 0) {
          if (!($die[0] == LOSE_SCORE && $die[1] == LOSE_SCORE)) {
               $totalScore[$player] = $totalScore[$player] + $turnScore;
          } else {
               $totalScore[$player] = 0;
          }
          print "\nTotal score for ";
          if ($player == HUMAN){
               print "human ";
          } else {
               print "computer ";
          }
          print "is $totalScore[$player]";
          sleep 1;
     } else {
          for (my $i = 0; $i < PLAYERS; $i++) {
               $totalScore[$i] = 0
          }
     }
}

sub printWinner {
     system ("cls");
     print "\n\n\nThe winner is ";
     if ($player == HUMAN) {
          print "the human ";
     } else {
          print "the computer ";
     }
     print "with a score of $totalScore[$player]!\n\n";     
}