# Assignment: Project 6
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 11.04.2015.01
# Purpose: Hangman

use 5.14.01;
use warnings;

my (@guesses, @answer, @solved);
my ($correctGuess, $parts, $win);
use constant DATAFILEIN => "./wordBank.txt";
use constant YES => 1;

sub main {
     readData();
     setWin();
     setParts();
     while ($parts < 7 && $win == 0) {
           enterGuess();
           setParts();
           printGuesses();
           setWin();
     }
     printGoodbye();
}

main();

sub readData {
     my $IN;
     my @words = ();
     my $counter = 0;
	open ($IN, '<', DATAFILEIN);
	while (<$IN>) {
		chomp ($words[$counter] = $_);
		$counter++;
	}
	close $IN;
     setAnswer(@words);
}

sub setAnswer {
     my @words = @_;
     my $size = @words;
     my $solution = $words[int(rand($size))];
     @answer = split(//, $solution);
}

sub enterGuess {
     my $alreadyGuessed = 0;
     my $guess = 2;
     while ($guess =~ /[0-9]/ || $alreadyGuessed == YES) {
          print "\n\nGuess a letter. ";
          chomp ($guess = <STDIN>);
          $alreadyGuessed = 0;
          my $size = @guesses;
          for (my $i = 0; $i < $size && $alreadyGuessed == 0; $i++) {
               if ($guesses[$i] eq $guess) {
                    $alreadyGuessed = YES;
               }
          }
          if ($guess =~ /[0-9]/) {
               say "Incorrect input. Please try again";
               sleep 1;
          } elsif ($alreadyGuessed == YES) {
               print "\nThat letter was already guessed.";
          } else {
               $guesses[$size] = $guess;
          }
     }
     checkGuess($guess);
}

sub checkGuess {
     my $guess = $_[0];
     $correctGuess = 0;
     my $size = @answer;
     for (my $i = 0; $i < $size; $i++) {
          if ($guess eq $answer[$i]) {
               $solved[$i] = $guess;
               $correctGuess = YES;
          } elsif (!(defined $solved[$i])) {
               $solved[$i] = "_";
          }
     }
}

sub setParts {
     if (defined $parts) {
         if ($correctGuess == 0) {
               $parts++;
               print "\nThat letter is not in the word!";
          } else {
               print "\nCongratulations! That letter is in the word!";
          }
          if ($parts >= 1) {
               print "\n     O";
          }
          if ($parts >= 2) {
               print "\n    /";
          }
          if ($parts >= 3) {
               print "|";
               #print "\n     |";
          }
          if ($parts >= 4) {
               print "\\";
               #print "\n    / \\ ";
          }
          if ($parts >= 5) {
               print "\n     |";
          }
          if ($parts >= 6) {
               print "\n    /";
          }
          if ($parts == 7) {
               print " \\";
          }
          print "\n\nSolution thus far: ";
          my $size = @solved;
          for (my $i = 0; $i < $size; $i++) {
               print "$solved[$i]";
          }
          sleep 1; 
     } else {
          $parts = 0;
     }
}

sub setWin {
     if (defined $win) {
          $win = YES;
          my $size = @solved;
          for (my $i = 0; $i < $size && $win == YES; $i++) {
               if ($solved[$i] ne $answer[$i]) {
                    $win = 0;
               }
          }
     } else {
          $win = 0;
     }
}

sub printGuesses {
     my $size = @guesses;
     print "\n\nLetters already guessed: ";
     for (my $i = 0; $i < $size; $i++) {
          if ($i != $size - 1) {
               print "$guesses[$i], ";
          } else {
               print "$guesses[$i]";
          }
     }
}

sub printGoodbye {
     if ($win == YES) {
          #system ("cls");
          print "\n\n\n\t\t\tCongratulations, you won!!!";
     } else {
          #system ("cls");
          print "\n\n\n\t\t\t\tYou Lose";
     }
     my $size = @answer;
     print "\nThe word was ";
     for (my $i = 0; $i < $size; $i++) {
          print "$answer[$i]";
     }
}