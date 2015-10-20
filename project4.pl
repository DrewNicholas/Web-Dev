# Assignment: Project 4
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.15.2015.01
# Purpose: Pig Dice game

use 5.14.1;
use warnings;

my (@humanScore, @computerScore, @die);
my ($num, $continueInt, $turnScore, $player, $playerScoreSize, $computerScoreSize, $humanCounter, $computerCounter, $hTotalScore, $cTotalScore); #numeric
my ($string);

use constant LOSE_SCORE => 1;

sub main {
     use constant WIN => 100;
     setConputerCounter();
     setPlayerCounter();
     $hTotalScore = 0;
     $cTotalScore = 0;
     while ($cTotalScore < WIN && $hTotalScore < WIN) {
          rollDie();
          
     }
}

main();

sub rollDie {
     use constant NUMBER_OF_DIE => 2;
     use constant MAX_DIE => 6;
     
     for (my $i = 0; $i < NUMBER_OF_DIE; $i++) {
          $die[$i] = int(rand(MAX_DIE) + 1);
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

sub setHumanScore {     
     if ($die[1] == LOSE_SCORE || $die[2] == LOSE_SCORE) {
          if ($die[1] == LOSE_SCORE && $die[2] == LOSE_SCORE) {
               for (my $i = 0; $i < $playerScoreSize; $i++) {
                    $humanScore[$i][$player] = 0;
                    $humanCounter = 0;
               }
          } else {
               $turnScore = 0;
          }
     } else {
          $turnScore = $die[1] + $die[2];
          setPlayerCounter();
     }
     $humanScore[$humanCounter] = $turnScore;
}

sub setHumanCounter {
     if (defined $humanCounter) {
          $humanCounter++;
     } else {
          $humanCounter = 0;
     }
}

sub setComputerScore {
     if ($die[1] == LOSE_SCORE || $die[2] == LOSE_SCORE) {
          if ($die[1] == LOSE_SCORE && $die[2] == LOSE_SCORE) {
               for (my $i = 0; $i < $computerScoreSize; $i++) {
                    $computerScore[$i] = 0;
                    $computerCounter = 0;
               }
          } else {
               $turnScore = 0;
          }
     } else {
          $turnScore = $die[1] + $die[2];
          setComputerCounter();
     }
     $computerScore[$computerCounter] = $turnScore;
}

sub setComputerCounter {
     if (defined $computerCounter) {
          $computerCounter++;
     } else {
          $computerCounter = 0;
     }
}

sub setPTotalScore {
     for (my $i = 0; $i < $playerScoreSize; $i++) {
          $hTotalScore = $hTotalScore + $humanScore[$humanCounter];
     }
}

sub setCTotalScore {
     for (my $i = 0; $i < $computerScoreSize; $i++) {
          $cTotalScore = $cTotalScore + $computerScore[$computerCounter];
     }
}