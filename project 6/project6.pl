# Assignment: Project 6
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 11.04.2015.01
# Purpose: Hangman

use 5.14.01;
use warnings;

my @words;
use constant DATAFILEIN => "./wordBank.txt";

sub main {
     readData();
     selectWord();
     
}
#sub stickFigure {
#     print "\n     O";
#     print "\n    /|\\ ";
#     print "\n     |";
#     print "\n    / \\ ";
#     print "\n\n";
#     
#}

main();

sub readData {
     my $IN;
     @words = ();
     my $counter = 0;
	open ($IN, '<', DATAFILEIN);
	while (<$IN>) {
		chomp ($words[$counter] = $_);
		$counter++;
	}
	close $IN;
}

sub selectWord {
     my $size = @words;
     my $answer = $words[int(rand($size))];
     
}