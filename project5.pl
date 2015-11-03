# Assignment: Project 5
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.27.2015.01
# Purpose: Apgar Medical Group merge data

use 5.14.01;
use warnings;

my @data;
use constant DATAFILEIN1 => "./data.Chapter07.ApgarMedicalBest.txt";
use constant DATAFILEIN2 => "./data.Chapter07.ApgarMedicalCushing.txt";
use constant DATAFILEOUT => "./data.ApgarMedicalCombined.txt";
use constant COLUMNS => 3;

sub main {
	readData();
	modifyData();
	printData();
}

main ();

sub readData {
     my $IN;
	my $counter = 0;
	my @tempData = ();
	@data = ();
	open ($IN, '<', DATAFILEIN1);
	while (<$IN>) {
		@tempData = split(/,/);
		for (my $i = 0; $i < COLUMNS; $i++) {
			chomp ($data[$counter][$i] = $tempData[$i]);
		}
		$counter++;
	}
	close $IN;
	
	@tempData = ();
	open ($IN, '<', DATAFILEIN2);
	while (<$IN>) {
		@tempData = split (/,/);
		for (my $i = 0; $i < COLUMNS; $i++) {
			chomp ($data[$counter][$i] = $tempData[$i]);
		}
		$counter++
	}
	close $IN;
}

#sub modifyData {
#	use constant BIRTHYEAR => 2;
#	my $size = @data;
#	my $temp = 0;
#	for (my $i = 1; $i < $size; $i++) {
#		my $j = $i;
#		while ($j > 0 && $data[$j][BIRTHYEAR] < $data[$j - 1][BIRTHYEAR]) {
#			$temp = $data[$j];
#			$data[$j] = $data[$j - 1];
#			$data[$j - 1] = $temp;
#			$j--;
#		}
#	}
#}

sub modifyData {
	use constant BIRTHYEAR => 2;
	my $size = @data;
	my @temp;
	for (my $i = 0; $i < $size; $i++) {
		my $j = $i;
		while ($j > 0 && $data[$j][BIRTHYEAR] < $data[$j - 1][BIRTHYEAR]) {
			for (my $k = 0; $k < COLUMNS; $k++) {
				$temp[$k] = $data[$j][$k];
				$data[$j][$k] = $data[$j - 1][$k];
				$data[$j - 1][$k] = $temp[$k];
			}
		}
	}
}

sub writeData {
	my $OUT;
	my $size = @data;
	open ($OUT, '>', DATAFILEOUT);
	for (my $i = 0; $i < $size; $i++) {
		for (my $j = 0; $j < COLUMNS; $j++) {
			print ($OUT "$data[$i][$j]");
		}
		print ($OUT "\n");
	}
	close $OUT;
}