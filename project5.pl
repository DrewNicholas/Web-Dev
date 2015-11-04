# Assignment: Project 5
# Author: Drew Nicholas (dmnicholas@me.com)
# Version: 10.27.2015.01
# Purpose: Apgar Medical Group merge data

use 5.14.01;
use warnings;

my @data;
use constant DATAFILEIN1 => "./ApgarMedicalBest.txt";
use constant DATAFILEIN2 => "./ApgarMedicalCushing.txt";
use constant DATAFILEOUT => "./ApgarMedicalCombined.txt";
use constant COLUMNS => 3;
use constant BIRTHYEAR => 2;

sub main {
	readData();
	modifyData();
	writeData();
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

sub modifyData {
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
			$j--;
		}
	}
}

sub writeData {
	my $OUT;
	my $size = @data;
	open ($OUT, '>', DATAFILEOUT);
	for (my $i = 0; $i < $size; $i++) {
		for (my $j = 0; $j < COLUMNS; $j++) {
			if (!($j == COLUMNS -1)) {
				print ($OUT "$data[$i][$j],");
			} else {
				print ($OUT "$data[$i][$j]");
			}
		}
		print ($OUT "\n");
	}
	close $OUT;
}

sub printData {
     use constant YEAR => 0;
     use constant NUMBER_BORN =>1;
	my $size = @data;
     my $counter = 0;
     my @sameAge;
     
     system ("cls");
     print "Number of patients born in the same year:\n\n";
     $sameAge[0][YEAR] = $data[0][BIRTHYEAR];
	for (my $i = 0; $i < $size; $i++) {
		if ($data[$i][BIRTHYEAR] == $sameAge[$counter][YEAR]) {
               $sameAge[$counter][NUMBER_BORN]++;
          } else {
               $counter++;
               $sameAge[$counter][YEAR] = $data[$i][BIRTHYEAR];
               $sameAge[$counter][NUMBER_BORN] = 1;
          }
	}
     $size = @sameAge;
     for (my $i = 0; $i < $size; $i++) {
          print "$sameAge[$i][YEAR]: $sameAge[$i][NUMBER_BORN]\n"
     }
}