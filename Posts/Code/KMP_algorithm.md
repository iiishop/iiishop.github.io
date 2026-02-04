---
title: KMP_algorithm
date: 2022-12-14 23:53:49
tags: 
 - Algorithm
categories: 
 - EnglishBlog
 - Algorithm
pre: KMP is a String-matching algorithm.
img: 3.png
---

---


# Introduce
`KMP` is a *String-matching* algorithm and one of the two *String-matching* algorithms I know.

The first is the `Brute-force algorithm (BF algorithm)`, and the *Time-complexity* is ***O(nm)***. *'n'* is the length of the **source String**, and *'m'* is the length of the **pattern String**.

The second is `KMP`, and its *Time-complexity* is ***O(n)***. Now, let's begin with why `KMP` was born.

<!-- more-->

# Background
This section will discuss the *background* of `KMP` but not its *history*.

When we want to find the index of the **pattern String** in the **source String**, usually, we will check the **source String** one by one to find the start character of the **pattern String**, then check if the rest matches the **pattern String**. If it matches, returns the index. If not, then return from the start.

We can see this function is a time waste, especially in the length of the **pattern String** is a large number. Because after every failure, the work of matching pattern String will be restarted. So, `KMP` uses a way to avoid this condition.

Now, I will use a simple example to show you how KMP works.

the **source String** is `"aaaaab"` and the **pattern String** is `"aaab"`

So the *Next array* is `"0120"`

We can easily know it will do ***6 loops*** but not ***6 processes***.

1. 
| 0        | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- |
| i        |      |      |      |      |      |
| a        | a    | a    | a    | a    | b    |
| a        | a    | a    | b    |      |      |
| `a == a` |      |      |      |      |      |

2. 
| 0        | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- |
|          | i    |      |      |      |      |
| a        | a    | a    | a    | a    | b    |
| a        | a    | a    | b    |      |      |
| `a == a` |      |      |      |      |      |

3. 
| 0        | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- |
|          |      | i    |      |      |      |
| a        | a    | a    | a    | a    | b    |
| a        | a    | a    | b    |      |      |
| `a == a` |      |      |      |      |      |

4. 
| 0                                                            | 1    | 2    | 3    | 4    | 5    |
| ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
|                                                              |      |      | i    |      |      |
| a                                                            | a    | a    | a    | a    | b    |
| a                                                            | a    | a    | b    |      |      |
| `a != b`                                                     |      |      |      |      |      |
| So, this matching failed. Because of Next[2] = 2, the next process is: |      |      |      |      |      |

5. 
| 0        | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- |
|          |      |      | i    |      |      |
| a        | a    | a    | a    | a    | b    |
|          | a    | a    | a    | b    |      |
| `a == a` |      |      |      |      |      |

6. 
| 0        | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- |
|          |      |      |      | i    |      |
| a        | a    | a    | a    | a    | b    |
|          | a    | a    | a    | b    |      |
| `a != b` |      |      |      |      |      |

7. 
| 0        | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- |
|          |      |      |      | i    |      |
| a        | a    | a    | a    | a    | b    |
|          |      | a    | a    | a    | b    |
| `a == a` |      |      |      |      |      |

9. 
| 0                                                            | 1    | 2    | 3    | 4    | 5    |
| ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
|                                                              |      |      |      |      | i    |
| a                                                            | a    | a    | a    | a    | b    |
|                                                              |      | a    | a    | a    | b    |
| `b == b`, i is in the last place of the **source String** and 'b' is also the last character of the **pattern String**. |      |      |      |      |      |

So, the matching is complete, the index is 2.

# Next Array

The most important part of `KMP` is the *Next array*.

The *Next array* shows how many elements can be ***skipped*** if the last matching fails in this place.

 An example of the *Next array*: 

| A    | B    | A    | C    | A    | B    | A    | B    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 0    | 1    | 0    | 1    | 2    | 3    | 2    |

From this table, we can see the pattern String is `"ABACABAB"` and the *Next array* is `"00101232"`, now I will show the code to tell how to generate the *Next array*.

```java
public int[] GetNext(String Pattern){
	int Pattern_Length = Pattern.length();
	int[] Next = new int[Pattern_Length];
	Next[0] = 0;
	for(int i = 1, j = 0;i < Pattern_Length;i++){
		while(j > 0 && Pattern.charAt(i) != Pattern.charAt(j)){
			j = Next[j - 1];
		}
		if(Pattern.charAt(i) == Pattern.charAt(j)){
			j++;
		}
		Next[i] = j;
	}
	return Next;
}
```

Let's simulate this process using "ABACABAB".

	Pattern_Lengh = 8
So, it will do 7 loops.

1. i = 1, j = 0
	```java
	Pattern[i] = 'B', Pattern[j] = 'A'
	Next[1] = 0
	```

2. i = 2, j = 0
	```java
	Pattern[i] = 'A', Pattern[j] = 'A'
	j++
	Next[2] = 1
	```

3. i = 3, j = 1
	```java
	Pattern[i] = 'C', Pattern[j] = 'B'
	j = Next[j - 1] = 0
	Pattern[j] = 'A'
	Next[3] = 0
	```

4. i = 4, j = 0
	```java
	Pattern[i] = 'A', Pattern[j] = 'A'
	j++
	Next[4] = 1
	```

5. i = 5, j = 1
	```java
	Pattern[i] = 'B', Pattern[j] = 'B'
	j++
	Next[5] = 2
	```

6. i = 6, j = 2
	```java
	Pattern[i] = 'A', Pattern[j] = 'A'
	j++
	Next[6] = 3
	```

7. i = 7, j = 3
	```java
	Pattern[i] = 'B', Pattern[j] = 'C'
	j = Next[j - 1] = 1
	Pattern[j] = 'B'
	j++
	Next[3] = 2
	```

In every loop, the code will generate a Next number. Now I will tell you why it can.

In this code, we can easily know `j` is a pointer to the prefix. When the current part of the string and the prefix are the same, `j` will self-increasing to point to the next character. But when the current character is not as same as the `Pattern[j]`,  `j` will return to the skipped character pointed to by the previous character, let's see it by an example.

`i = 7, j = 3`

| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      | j    |      |      |      |      |
| A    | B    | A    | C    | A    | B    | A    | B    |
| 0    | 0    | 1    | 0    | 1    | 2    | 3    | x    |

Because `Pattern[i] != Pattern[j] and j > 0`, so, we need to find the skip number from the last character in the prefix.

`j = Next[j - 1] = Next[2] = 1`

| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | j    |      |      |      |      |      |      |
| A    | B    | A    | C    | A    | B    | A    | B    |
| 0    | 0    | 1    | 0    | 1    | 2    | 3    | x    |

It is because we treat the `Pattern[i - 1] and Puttern[i]` as a whole, and `Pattern[i - 1]` corresponds to **the third character** in the prefix, then we see **the third character** in the prefix to be the current character, so, it corresponds to **the first character** in the prefix, thus, we need to check if **the second character** in the prefix matching `Pattern[i]`.

Because of `Pattern[1] == Pattern[i]` thus, *j++*, it means we can skip 2 characters if the last matching failed in the next place (although it is unlikely to be achieved).

Now, we found out how to generate the *Next array*, the next, I will show you how to use the *Next array* in the *String-matching* algorithm

# KMP

I will show the code first.

```java
public int KMP(String Source, String Pattern){
	int[] Next = GetNext(Pattern);
	for (int i = 0, j = 0; i < Source.length(); i++) {
		while (j > 0 && Pattern.charAt(j) != Source.charAt(i)) {
			j = next[j - 1];
		}
		if (Pattern.charAt(j) == Source.charAt(i)) {
			j++;
		}
		if (j == Pattern.length()) {
			return i - j + 1;
		}
	}
	return -1;
}
```
We can see some of this code is as same as the code in the function `GetNext` and it also does the same thing. So, we can see the `GetNext` function is a process to match strings within the **pattern String**.

Skip them, the last part `j == Pattern_Length` means j points over the **pattern String**, so the matching is complete.

# Conclusion

The `KMP` algorithm reduced the *Time-complexity* of the `B_F String-matching algorithm`. The most important part of `KMP` is solving the **Next array**, this step is an expression of ***recursive thinking***, we need to appreciate this idea and use it to improve efficiency when thinking of algorithms to solve other problems.

# Whole Code
```java
public int KMP(String Source, String Pattern){
	int Pattern_Length = Pattern.length();
	int[] Next = new int[Pattern_Length];
	Next[0] = 0;
	for(int i = 1, j = 0;i < Pattern_Length;i++){
		while(j > 0 && Pattern.charAt(i) != Pattern.charAt(j)){
			j = Next[j - 1];
		}
		if(Pattern.charAt(i) == Pattern.charAt(j)){
			j++;
		}
		Next[i] = j;
	}
	for (int i = 0, j = 0; i < Source.length(); i++) {
		while (j > 0 && Pattern.charAt(j) != Source.charAt(i)) {
			j = next[j - 1];
		}
		if (Pattern.charAt(j) == Source.charAt(i)) {
			j++;
		}
		if (j == Pattern_Length) {
			return i - j + 1;
		}
	}
	return -1;
}
```
