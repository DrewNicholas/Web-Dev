# Assignment: Project 4
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.15.2015.01
# Purpose: Pig Dice game

use 5.14.1;
use warnings;

my (@playerScore, @computerScore, @die);
my ($num, $continueInt,$turnScore, $playerScoreSize, $computerScoreSize, $playerCounter, $computerCounter, $pTotalScore, $cTotalScore); #numeric
my ($string);

use constant LOSE_SCORE => 1;

sub main {
     use constant WIN => 100;
     while ($cTotalScore < WIN && $pTotalScore < WIN) {
          
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

sub setPlayerScore {     
     if ($die[1] == LOSE_SCORE || $die[2] == LOSE_SCORE) {
          if ($die[1] == LOSE_SCORE && $die[2] == LOSE_SCORE) {
               for (my $i = 0; $i < $playerScoreSize; $i++) {
                    $playerScore[$i] = 0;
                    $playerCounter = 0;
               }
          } else {
               $turnScore = 0;
          }
     } else {
          $turnScore = $die[1] + $die[2];
          $playerCounter++;
     }
     $playerScore[$playerCounter] = $turnScore;
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
          $computerCounter++;
     }
     $computerScore[$computerCounter] = $turnScore;
}

sub setPTotalScore {
     for (my $i = 0; $i < $playerScoreSize; $i++) {
          $pTotalScore = $pTotalScore + $playerScore[$playerCounter];
     }
}

sub setCTotalScore {
     for (my $i = 0; $i < $computerScoreSize; $i++) {
          $cTotalScore = $cTotalScore + $computerScore[$computerCounter];
     }
}