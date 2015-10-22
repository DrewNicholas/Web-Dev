# Assignment: Project 4
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.15.2015.01
# Purpose: Pig Dice game

use 5.14.1;
use warnings;

my (@die, @score, @counter, @totalScore);
my ($continueInt, $turnScore, $player, $scoreSize, $rollAgain); #numeric
my ($string);

use constant HUMAN => 0;
use constant COMPUTER =>1;
use constant YES => 1;

sub main {
     use constant WIN => 100;

     setCounter();
     while ($totalScore[COMPUTER] < WIN && $totalScore[HUMAN] < WIN) {
          setPlayer();
          $rollAgain = YES;
          while ($rollAgain == YES) {
                rollDie();
                setTurnScore();
                setRollAgain();
                
          }
          setScoreSize();
          setScore();
          setTotalScore();
     }
}

main();

sub rollDie {
     use constant NUMBER_OF_DIE => 2;
     use constant MAX_DIE => 6;
     
     print "\nRolling die...";
     for (my $i = 0; $i < NUMBER_OF_DIE; $i++) {
          $die[$i] = int(rand(MAX_DIE) + 1);
     }
}

sub setPlayer {
     if ($player == HUMAN) {
          $player = COMPUTER;
          print "Player is computer";
     } else {
          $player = HUMAN;
          print "Player is human";
     }
}

sub setRollAgain {
     use constant MAX_ROLL_AGAIN => 2;
     
     if (defined $rollAgain) {
          if ($turnScore == -1 || $turnScore == 0) {
               print "Your turn is over.";
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
                              system ("cls");
                         }               
                    }
               } else {
                    $rollAgain = int(rand(MAX_ROLL_AGAIN));
               }
          }
     } else {
          $rollAgain = YES;
     }
}

sub setContinueInt {
     if (defined $continueInt) {
		$continueInt = -1;
		while ($continueInt !~ /[0-9]/ || $continueInt > 1 || $continueInt < 0) {
			print "\n\nDo you want to continue (0=no, 1=yes)? ";
			chomp ($continueInt = <STDIN>);
			if ($continueInt !~ /[0-9]/ || $continueInt > 1 || $continueInt < 0) {
				say "Incorrect input. Please try again";
				sleep 1;
				system ("cls");
			}
		}
     } else {
          $continueInt = 1;
     }
}

sub setScoreSize {
     $scoreSize = @score
}

sub setTurnScore {
     use constant LOSE_SCORE => 1;
     
     if ($die[1] == LOSE_SCORE || $die[2] == LOSE_SCORE) {
          if ($die[1] == $die[2]) {
               $turnScore = -1;
          } else {
               $turnScore = 0;
          }
     } else {
          $turnScore = $die[1] + $die[2];
          setCounter();
     }
     print "Score for this turn is $turnScore. ";
}

sub setScore {
     if ($turnScore == -1){
          for (my $i = 0; $i < $scoreSize; $i++) {
                    $score[$i][$player] = 0;
                    $counter[$player] = 0;
          }
     } else {
          $score[$counter[$player]][$player] = $turnScore;
     }     
}

sub setCounter {
     if (defined $counter[$player]) {
          $counter[$player]++;
     } else {
          $counter[$player] = 0;
     }
}

sub setTotalScore {
     $totalScore[$player] = 0;
     for (my $i = 0; $i < $scoreSize; $i++) {
          $totalScore[$player] = $totalScore[$player] + $score[$counter[$player]][$player];
     }
     print "\nTotal score for $player is $totalScore[$player]";
}